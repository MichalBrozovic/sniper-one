import { readFileSync } from 'fs';
import path from 'path';

/**
 * Bezpečné načtení JSON souboru z kořenového adresáře projektu.
 * Přidáno kódování utf8, aby Node.js správně interpretoval obsah.
 */
const safeLoadJSON = (fileName) => {
    try {
        const filePath = path.resolve(process.cwd(), fileName);
        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (error) {
        // Pokud soubor chybí nebo je poškozený, vrátíme prázdný objekt, 
        // aby zbytek enginu sniper-bender (zejména cli.js) nespadl.
        return {};
    }
};

// Exportujeme informace o projektu (jméno, verze) a uživatelský config
export const packageInfo = safeLoadJSON('package.json');
export const config = safeLoadJSON('config.json');