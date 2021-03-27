/**
* Game module to handle the template steps for handlebars
* @author Dylan Roubos
*/
Game.Template = (function () {

    //Method to call the template withouth initialising it
    const getTemplate = (getTemplate) => {
        return spa_templates.templates[getTemplate];
    }

    //Method to the called template with the given data
    const parseTemplate = (templateName, data) => {
        return getTemplate(templateName)(data);
    }
    return {
        parseTemplate: parseTemplate,
    }
})();