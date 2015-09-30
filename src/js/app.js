// Angular module
var app = angular.module('gw2-timer', ['720kb.tooltips']);

// Tooltip settings
app.config(function (tooltipsConfigProvider) {
    tooltipsConfigProvider.options({
        size: 'large',
        lazy: true,
        showTrigger: 'click',
        hideTrigger: 'click',
        side: 'bottom',
        try: false
    })
});

function copyToClipboard(s) {
    if (window.clipboardData && clipboardData.setData) {
        clipboardData.setData('text', s);
    }
}