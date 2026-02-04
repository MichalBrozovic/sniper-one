#!/usr/bin/env node
/** @format */

import command from './cli.js'
import { config } from './config.js'
import fs from 'fs'
import path from 'path'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import webpack from 'webpack'
import getWebpackConfig from './webpack.config.js'
import chalk from 'chalk';

command.parse(process.argv)

const options = command.opts()

const rootDir = process.cwd()

const sourceFolder = path.join(rootDir, config.sourceFolder ?? 'src')
const outputFolder = path.join(rootDir, options.folder ?? config.outputFolder)

// Přepsání options z environmentu (pro build příkaz) - SNIPER EDITION
if (process.env.SNIPER_MODE) options.mode = process.env.SNIPER_MODE
if (process.env.SNIPER_WATCH) options.watch = process.env.SNIPER_WATCH

// BLANK MODE
const blankModeStyle = {
    match: /<link\s+href="https:\/\/cdn\.myshoptet\.com\/prj\/[^"]+"[^>]*>/gi,
    fn: function () {
        return ''
    },
}
const blankModeScript = {
    match: /<script\s+src="https:\/\/cdn\.myshoptet\.com\/prj\/[^"]+"[^>]*>/gi,
    fn: function () {
        return ''
    },
}

// REMOVE ALREADY LINKED SCRIPTS AND STYLES
const preloadStyleCriticalRemove = {
    match: new RegExp(`<link[^>]*rel="preload"[^>]*href=".*\\/scss-critical(?:\\.min)?\\.css(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}

const preloadScriptCriticalRemove = {
    match: new RegExp(`<link[^>]*rel="preload"[^>]*href=".*\\/js-critical(?:\\.min)?\\.js(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}
const scriptCriticalRemove = {
    match: new RegExp(`<script[^>]*src=".*\\/js-critical(?:\\.min)?\\.js(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}
const styleCriticalRemove = {
    match: new RegExp(`<link[^>]*href=".*\\/scss-critical(?:\\.min)?\\.css(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}
const scriptRemove = {
    match: new RegExp(`<script[^>]*src=".*\\/js-script(?:\\.min)?\\.js(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}
const styleRemove = {
    match: new RegExp(`<link[^>]*href=".*\\/scss-style(?:\\.min)?\\.css(?:\\?[^"]*)?"[^>]*>`, 'i'),
    fn: function () {
        return ''
    },
}

// LINK LOCAL SCRIPTS AND STYLES
const headerIncludes = {
    match: /<\/head>/i,
    fn: function (req, res, match) {
        const isProduction = options.mode === 'production'
        const criticalScriptExists = fs.existsSync(outputFolder + `/js-critical${isProduction ? '.min' : ''}.js`)
        const criticalStyleExists = fs.existsSync(outputFolder + `/scss-critical${isProduction ? '.min' : ''}.css`)
        const styleExists = fs.existsSync(outputFolder + `/scss-style${isProduction ? '.min' : ''}.css`)
        let headerMarkup = ''
        if (criticalScriptExists) {
            headerMarkup += `<link rel="preload" href="/js-critical${isProduction ? '.min' : ''}.js" as="script">`
        }
        if (criticalStyleExists) {
            headerMarkup += `<link rel="preload" href="/scss-critical${isProduction ? '.min' : ''}.css" as="style">`
            headerMarkup += `<link rel="stylesheet" href="/scss-critical${isProduction ? '.min' : ''}.css">`
        }

        if (styleExists) headerMarkup += `<link rel="stylesheet" href="/scss-style${isProduction ? '.min' : ''}.css">`
        return headerMarkup + match
    },
}
const footerIncludes = {
    match: /<\/body>(?![\s\S]*<\/body>[\s\S]*$)/i,
    fn: function (req, res, match) {
        const isProduction = options.mode === 'production'
        let footerMarkup = ''
        const criticalScriptExists = fs.existsSync(outputFolder + `/js-critical${isProduction ? '.min' : ''}.js`)
        if (criticalScriptExists) footerMarkup += `<script src="/js-critical${isProduction ? '.min' : ''}.js"></script>`
        const scriptExists = fs.existsSync(outputFolder + `/js-script${isProduction ? '.min' : ''}.js`)
        if (scriptExists) footerMarkup += `<script src="/js-script${isProduction ? '.min' : ''}.js"></script>`
        return footerMarkup + match
    },
}

const rewriteRules = [
    { ...preloadStyleCriticalRemove },
    { ...preloadScriptCriticalRemove },
    { ...scriptCriticalRemove },
    { ...styleCriticalRemove },
    { ...scriptRemove },
    { ...styleRemove },
    { ...headerIncludes },
    { ...footerIncludes },
    { ...((options.blankModeStyle || config.blankModeStyle) && blankModeStyle) },
    { ...((options.blankModeScript || config.blankModeScript) && blankModeScript) },
]

// Detekce watcheru
const useWatcher =
    options.watch === true || options.watch === 'true' || (typeof options.watch === 'undefined' && options.mode !== 'production')
const plugins = useWatcher
    ? [
            new BrowserSyncPlugin({
                proxy: { target: options.remote ?? config.defaultUrl },
                serveStatic: [outputFolder],
                rewriteRules: rewriteRules.filter((value) => Object.keys(value).length !== 0),
                port: 3010,
                notify: options.notify,
                open: false,
            }),
      ]
    : []

const baseWebpackConfig = getWebpackConfig(options.mode)

const webpackConfig = {
    ...baseWebpackConfig,
    watch: useWatcher,
    plugins: [...plugins, ...baseWebpackConfig.plugins],
}

console.log(chalk.red.bold('\n🎯 [SNIPER-BENDER] Initializing target...'));

webpack(webpackConfig, (err, stats) => {
    if (err) {
        console.error(chalk.bgRed.white.bold(' ⚠ CRITICAL HIT ERROR '), err);
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.log(chalk.red.bold('\n❌ TARGET MISSED (Build Errors):'));
        info.errors.forEach(error => console.log(chalk.red('  -> ' + error.message)));
    }

    if (stats.hasWarnings()) {
        console.log(chalk.yellow.bold('\n⚠️ RECONNAISSANCE WARNINGS:'));
        info.warnings.forEach(warn => console.log(chalk.yellow('  -> ' + warn.message)));
    }

    // Výpis statistik v barvách
    console.log(stats.toString({
        chunks: false,  
        colors: true,    
        modules: false,
        assets: true,
        children: false
    }));

    if (useWatcher) {
        console.log(chalk.green.bold('\n🔫 SNIPER IS READY. Watching for changes...'));
        console.log(chalk.cyan(`🔗 Proxy: ${chalk.underline(options.remote ?? config.defaultUrl)}`));
        console.log(chalk.cyan(`🏠 Local: ${chalk.underline('http://localhost:3010')}\n`));
    } else {
        console.log(chalk.bgGreen.black.bold('\n ✅ MISSION ACCOMPLISHED ') + chalk.green(' Build is finished.\n'));
        process.exit(stats.hasErrors() ? 1 : 0);
    }
});