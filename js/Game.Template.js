Game.Template = (function () {

    const getTemplate = (getTemplate) => {
        return spa_templates.templates[getTemplate];
    }

    const parseTemplate = (templateName, data) => {
        return getTemplate(templateName)(data);
    }
    return {
        parseTemplate: parseTemplate,
    }
})();