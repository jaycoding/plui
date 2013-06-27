/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
   	config.language = 'en';
   	config.uiColor = '#FFFFFF';
	config.resize_minWidth = 535;
	config.resize_maxWidth = 535;
	config.skin='kama';
	config.toolbar='BasicToolbar';
	config.toolbar_BasicToolbar=[
		['Bold', 'Italic', 'Underline', 'Strike'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink'],
	]
	config.toolbarLocation='top';
	config.toolbarStartupExpanded='true';
	config.autoUpdateElement='true';
	config.contentsCss = '.._scripts/control/CKEditor/contents.css';
	config.enterMode =CKEDITOR.ENTER_BR;
    config.toolbar_Full =
    [
        ['Source', '-', 'Save', 'NewPage', 'Preview', '-', 'Templates'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
        ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
        ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
        '/',
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink', 'Anchor'],
        ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'],
        '/',
        ['Styles', 'Format', 'Font', 'FontSize'],
    	['TextColor', 'BGColor']
    ];

    //自定义CKFinder,用时在客户端只要写Toolbar = "BasicToolbar" 即可，默认为 Toolbar = "Full"
//    config.toolbar_BasicToolbar =
//    [
//        ['Bold', 'Italic', 'Underline', 'Strike'],
//        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
//        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
//    ];

    //在 CKEditor 中集成 CKFinder，注意 ckfinder 的路径选择要正确。
//    var ckfinderPath = "../_Controls"; //ckfinder路径
//    config.filebrowserBrowseUrl = ckfinderPath + '/ckfinder/ckfinder.html';
//    config.filebrowserImageBrowseUrl = ckfinderPath + '/ckfinder/ckfinder.html?type=Images';
//    config.filebrowserFlashBrowseUrl = ckfinderPath + '/ckfinder/ckfinder.html?type=Flash';
//    config.filebrowserUploadUrl = ckfinderPath + '/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
//    config.filebrowserImageUploadUrl = ckfinderPath + '/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
//    config.filebrowserFlashUploadUrl = ckfinderPath + '/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';


};
