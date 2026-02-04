import { Command } from 'commander'
import { packageInfo } from './config.js'

const command = new Command()

command
    .name('sniper-bender')
    .description(packageInfo.description || 'Sniper Bender - development tool for Shoptet')
    .version(packageInfo.version || '1.0.0')

command
    .option('-r, --remote <url>', 'URL of the remote Eshop with https:// prefix')
    .option('-w, --watch', 'watch for changes and reload the page', true)
    .option('--blankModeScript', 'simulate the blank template.', false)
    .option('--blankModeStyle', 'simulate the blank template.', false)
    .option('-n, --notify', 'display pop-over notifications in the browser', false)
    .option('-m, --mode <mode>', 'development or production or build mode', 'development')

command
    .command('build')
    .description('Spustí produkční build bez watcheru')
    .action(async () => {
        process.env.SNIPER_MODE = 'production'
        process.env.SNIPER_WATCH = 'false'
        await import('./index.js')
    })

command
    .command('start')
    .description('Spustí vývojový režim s watcherem')
    .action(async () => {
        process.env.SNIPER_MODE = 'development'
        process.env.SNIPER_WATCH = 'true'
        await import('./index.js')
    })

export default command