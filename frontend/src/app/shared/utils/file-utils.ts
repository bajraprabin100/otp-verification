
function getExtension(filename: string) {
    const parts = filename.split(".");
    return parts[parts.length - 1];
}
function checkType(filename: string, supportType: string[]){
    const ext = getExtension(filename);
    return !!supportType.find(d => d.toLowerCase() === ext.toLowerCase());
}

function formatText(supportType: string[]){
    return supportType.length > 1 ? supportType.slice(0,supportType.length - 1).join(", ").concat(" or ",supportType[supportType.length -1]) : supportType[0];
}
async function downloadFile(fileLink, nameOfDownload = "data.png", type = "link"){
    let href;
    if(type === "link"){
        const response = await fetch(fileLink);
        const blobImage = await response.blob();
        href = URL.createObjectURL(blobImage);
    } else {
        href = `data:application/pdf;base64,${fileLink}`
    }
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
    URL.revokeObjectURL(href)
}

export {getExtension, checkType, formatText, downloadFile}
