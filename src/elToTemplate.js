import getStyle from './getStyle';

export default function elToTemplate(el) {

    let tagName = el.tagName.toLowerCase();

    let styleTemplate = "";
    let elStyles = getStyle(el);

    for (let index = 0; index < elStyles.length; index++) {
        let keyName = elStyles[index];
        styleTemplate += keyName + ":" + elStyles[keyName] + ";";
    }

    let template = "<" + tagName + " style='" + styleTemplate + "'>";

    for (let index = 0; index < el.childNodes.length; index++) {

        if (el.childNodes[index].nodeType == '3') {
            template += el.childNodes[index].textContent;
        } else if (el.childNodes[index].nodeType == '1') {
            template += elToTemplate(el.childNodes[index]);
        }

    }

    template += "</" + tagName + ">";

    return template;
}