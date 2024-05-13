// écoute l'événement d'installation de l'extension
chrome.runtime.onInstalled.addListener(() => {
    // définir le badge d'action sur "OFF" par défaut
    chrome.action.setBadgeText({
        text: "OFF",
    });
    //ajout de l'extension dans le menu contextuel
    chrome.contextMenus.create({
        id: 'openSidePanel',
        title: 'SWAP Side Panel',
        contexts: ['all']
    });
});

// gestion de l'extension dans le menu contextuel
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'openSidePanel') {
        //Permet d'ouvrir le panneau latéral via le menu contextuel(dans tous les onglets)
        chrome.sidePanel.open({ windowId: tab.windowId });
    }
});

// écoute les clics sur icon de l'extension
chrome.action.onClicked.addListener(async (tab) => {
    // obtenir l'état actuel du badge ("ON" ou "OFF")
    const currentBadgeState = await chrome.action.getBadgeText({ tabId: tab.id });
    // déterminer le nouvel état (inverser l'état précédent)
    const newBadgeState = currentBadgeState === "ON" ? "OFF" : "ON";
    // définir le badge d'action sur le nouvel état
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: newBadgeState,
    });
     // gérer activation/désactivation de l'extension
     if (newBadgeState === "ON") {
        // activer l'extension
        console.log("Extension activée");
        // injecter le script de contenu dans l'onglet actuel
        await chrome.scripting.executeScript({
            files: ["scripts/content.js"],
            target: { tabId: tab.id },
        });
         // injecter fichier CSS dans toutes les pages web ouvertes
        await chrome.scripting.insertCSS({
            files: ["main.css"],
            target: { tabId: tab.id },
        });
    } else if (newBadgeState === "OFF") {
        // désactiver l'extension
        // recharger l'onglet actif pour supprimer les modifications
        await chrome.tabs.reload()
        await chrome.sidePanel.setOptions({
            tabId,
            enabled: false
        });
    };
});
