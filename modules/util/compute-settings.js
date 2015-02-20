// Internal method used to generate settings from static values
var clone = require('lodash/lang/clone')
var { absoluteDarken, absoluteLighten, spin, fade } = require('./color.js');

// Using an array to guarantee order
var computedValuesArray = [
  {
    settingName: "grayDarker",
    computeValue: function (settings) { return absoluteLighten(settings.grayBase, 13.5); }
  },
  {
    settingName: "grayDark",
    computeValue: function (settings) { return absoluteLighten(settings.grayBase, 20); }
  },
  {
    settingName: "gray",
    computeValue: function (settings) { return absoluteLighten(settings.grayBase, 33.5); }
  },
  {
    settingName: "grayLight",
    computeValue: function (settings) { return absoluteLighten(settings.grayBase, 46.7); }
  },
  {
    settingName: "grayLighter",
    computeValue: function (settings) { return absoluteLighten(settings.grayBase, 93.5); }
  },
  {
    settingName: "brandPrimary",
    computeValue: function (settings) { return absoluteDarken("#428bca", 6.5); }
  },
  {
    settingName: "textColor",
    computeValue: function (settings) { return settings.grayDark; }
  },
  {
    settingName: "linkColor",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "linkHoverColor",
    computeValue: function (settings) { return absoluteDarken(settings.linkColor, 15); }
  },
  {
    settingName: "fontFamilyBase",
    computeValue: function (settings) { return settings.fontFamilySansSerif; }
  },
  {
    settingName: "fontSizeLarge",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 1.25); }
  },
  {
    settingName: "fontSizeSmall",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 0.85); }
  },
  {
    settingName: "fontSizeH1",
    computeValue: function (settings) { return Math.floor(settings.fontSizeBase * 2.6); }
  },
  {
    settingName: "fontSizeH2",
    computeValue: function (settings) { return Math.floor(settings.fontSizeBase * 2.15); }
  },
  {
    settingName: "fontSizeH3",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 1.7); }
  },
  {
    settingName: "fontSizeH4",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 1.25); }
  },
  {
    settingName: "fontSizeH5",
    computeValue: function (settings) { return settings.fontSizeBase; }
  },
  {
    settingName: "fontSizeH6",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 0.85); }
  },
  {
    settingName: "lineHeightComputed",
    computeValue: function (settings) { return Math.floor(settings.fontSizeBase * settings.lineHeightBase); }
  },
  {
    settingName: "componentActiveBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "tableBgActive",
    computeValue: function (settings) { return settings.tableBgHover; }
  },
  {
    settingName: "btnPrimaryBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "btnPrimaryBorder",
    computeValue: function (settings) { return absoluteDarken(settings.btnPrimaryBg, 5); }
  },
  {
    settingName: "btnSuccessBg",
    computeValue: function (settings) { return settings.brandSuccess; }
  },
  {
    settingName: "btnSuccessBorder",
    computeValue: function (settings) { return absoluteDarken(settings.btnSuccessBg, 5); }
  },
  {
    settingName: "btnInfoBg",
    computeValue: function (settings) { return settings.brandInfo; }
  },
  {
    settingName: "btnInfoBorder",
    computeValue: function (settings) { return absoluteDarken(settings.btnInfoBg, 5); }
  },
  {
    settingName: "btnWarningBg",
    computeValue: function (settings) { return settings.brandWarning; }
  },
  {
    settingName: "btnWarningBorder",
    computeValue: function (settings) { return absoluteDarken(settings.btnWarningBg, 5); }
  },
  {
    settingName: "btnDangerBg",
    computeValue: function (settings) { return settings.brandDanger; }
  },
  {
    settingName: "btnDangerBorder",
    computeValue: function (settings) { return absoluteDarken(settings.btnDangerBg, 5); }
  },
  {
    settingName: "btnLinkDisabledColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "inputBgDisabled",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "inputColor",
    computeValue: function (settings) { return settings.gray; }
  },
  {
    settingName: "inputBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "inputBorderRadiusLarge",
    computeValue: function (settings) { return settings.borderRadiusLarge; }
  },
  {
    settingName: "inputBorderRadiusSmall",
    computeValue: function (settings) { return settings.borderRadiusSmall; }
  },
  {
    settingName: "inputHeightBase",
    computeValue: function (settings) { return settings.lineHeightComputed + (settings.paddingBaseVertical * 2) + 2; }
  },
  {
    settingName: "inputHeightLarge",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeLarge * settings.lineHeightLarge) + (settings.paddingLargeVertical * 2) + 2; }
  },
  {
    settingName: "inputHeightSmall",
    computeValue: function (settings) { return Math.floor(settings.fontSizeSmall * settings.lineHeightSmall) + (settings.paddingSmallVertical * 2) + 2; }
  },
  {
    settingName: "legendColor",
    computeValue: function (settings) { return settings.grayDark; }
  },
  {
    settingName: "inputGroupAddonBg",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "inputGroupAddonBorderColor",
    computeValue: function (settings) { return settings.inputBorder; }
  },
  {
    settingName: "dropdownLinkColor",
    computeValue: function (settings) { return settings.grayDark; }
  },
  {
    settingName: "dropdownLinkHoverColor",
    computeValue: function (settings) { return absoluteDarken(settings.grayDark, 5); }
  },
  {
    settingName: "dropdownLinkActiveColor",
    computeValue: function (settings) { return settings.componentActiveColor; }
  },
  {
    settingName: "dropdownLinkActiveBg",
    computeValue: function (settings) { return settings.componentActiveBg; }
  },
  {
    settingName: "dropdownLinkDisabledColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "dropdownHeaderColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "screenXsMin",
    computeValue: function (settings) { return settings.screenXs; }
  },
  {
    settingName: "screenPhone",
    computeValue: function (settings) { return settings.screenXsMin; }
  },
  {
    settingName: "screenSmMin",
    computeValue: function (settings) { return settings.screenSm; }
  },
  {
    settingName: "screenTablet",
    computeValue: function (settings) { return settings.screenSmMin; }
  },
  {
    settingName: "screenMdMin",
    computeValue: function (settings) { return settings.screenMd; }
  },
  {
    settingName: "screenDesktop",
    computeValue: function (settings) { return settings.screenMdMin; }
  },
  {
    settingName: "screenLgMin",
    computeValue: function (settings) { return settings.screenLg; }
  },
  {
    settingName: "screenLgDesktop",
    computeValue: function (settings) { return settings.screenLgMin; }
  },
  {
    settingName: "screenXsMax",
    computeValue: function (settings) { return settings.screenSmMin - 1; }
  },
  {
    settingName: "screenSmMax",
    computeValue: function (settings) { return settings.screenMdMin - 1; }
  },
  {
    settingName: "screenMdMax",
    computeValue: function (settings) { return settings.screenLgMin - 1; }
  },
  {
    settingName: "gridFloatBreakpoint",
    computeValue: function (settings) { return settings.screenSmMin; }
  },
  {
    settingName: "gridFloatBreakpointMax",
    computeValue: function (settings) { return settings.gridFloatBreakpoint - 1; }
  },
  {
    settingName: "containerTablet",
    computeValue: function (settings) { return 720 + settings.gridGutterWidth; }
  },
  {
    settingName: "containerSm",
    computeValue: function (settings) { return settings.containerTablet; }
  },
  {
    settingName: "containerDesktop",
    computeValue: function (settings) { return 940 + settings.gridGutterWidth; }
  },
  {
    settingName: "containerMd",
    computeValue: function (settings) { return settings.containerDesktop; }
  },
  {
    settingName: "containerLargeDesktop",
    computeValue: function (settings) { return 1140 + settings.gridGutterWidth; }
  },
  {
    settingName: "containerLg",
    computeValue: function (settings) { return settings.containerLargeDesktop; }
  },
  {
    settingName: "navbarMarginBottom",
    computeValue: function (settings) { return settings.lineHeightComputed; }
  },
  {
    settingName: "navbarBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "navbarPaddingHorizontal",
    computeValue: function (settings) { return Math.floor(settings.gridGutterWidth / 2); }
  },
  {
    settingName: "navbarPaddingVertical",
    computeValue: function (settings) { return (settings.navbarHeight - settings.lineHeightComputed) / 2; }
  },
  {
    settingName: "navbarDefaultBorder",
    computeValue: function (settings) { return absoluteDarken(settings.navbarDefaultBg, 6.5); }
  },
  {
    settingName: "navbarDefaultLinkActiveBg",
    computeValue: function (settings) { return absoluteDarken(settings.navbarDefaultBg, 6.5); }
  },
  {
    settingName: "navbarDefaultBrandColor",
    computeValue: function (settings) { return settings.navbarDefaultLinkColor; }
  },
  {
    settingName: "navbarDefaultBrandHoverColor",
    computeValue: function (settings) { return absoluteDarken(settings.navbarDefaultBrandColor, .1); }
  },
  {
    settingName: "navbarInverseColor",
    computeValue: function (settings) { return absoluteLighten(settings.grayLight, 15); }
  },
  {
    settingName: "navbarInverseBorder",
    computeValue: function (settings) { return absoluteDarken(settings.navbarInverseBg, 10); }
  },
  {
    settingName: "navbarInverseLinkColor",
    computeValue: function (settings) { return absoluteLighten(settings.grayLight, 15); }
  },
  {
    settingName: "navbarInverseLinkActiveColor",
    computeValue: function (settings) { return settings.navbarInverseLinkHoverColor; }
  },
  {
    settingName: "navbarInverseLinkActiveBg",
    computeValue: function (settings) { return absoluteDarken(settings.navbarInverseBg, 10); }
  },
  {
    settingName: "navbarInverseBrandColor",
    computeValue: function (settings) { return settings.navbarInverseLinkColor; }
  },
  {
    settingName: "navLinkHoverBg",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "navDisabledLinkColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "navDisabledLinkHoverColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "navTabsLinkHoverBorderColor",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "navTabsActiveLinkHoverBg",
    computeValue: function (settings) { return settings.bodyBg; }
  },
  {
    settingName: "navTabsActiveLinkHoverColor",
    computeValue: function (settings) { return settings.gray; }
  },
  {
    settingName: "navTabsJustifiedActiveLinkBorderColor",
    computeValue: function (settings) { return settings.bodyBg; }
  },
  {
    settingName: "navPillsBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "navPillsActiveLinkHoverBg",
    computeValue: function (settings) { return settings.componentActiveBg; }
  },
  {
    settingName: "navPillsActiveLinkHoverColor",
    computeValue: function (settings) { return settings.componentActiveColor; }
  },
  {
    settingName: "paginationColor",
    computeValue: function (settings) { return settings.linkColor; }
  },
  {
    settingName: "paginationHoverColor",
    computeValue: function (settings) { return settings.linkHoverColor; }
  },
  {
    settingName: "paginationHoverBg",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "paginationActiveBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "paginationActiveBorder",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "paginationDisabledColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "pagerBg",
    computeValue: function (settings) { return settings.paginationBg; }
  },
  {
    settingName: "pagerBorder",
    computeValue: function (settings) { return settings.paginationBorder; }
  },
  {
    settingName: "pagerHoverBg",
    computeValue: function (settings) { return settings.paginationHoverBg; }
  },
  {
    settingName: "pagerActiveBg",
    computeValue: function (settings) { return settings.paginationActiveBg; }
  },
  {
    settingName: "pagerActiveColor",
    computeValue: function (settings) { return settings.paginationActiveColor; }
  },
  {
    settingName: "pagerDisabledColor",
    computeValue: function (settings) { return settings.paginationDisabledColor; }
  },
  {
    settingName: "jumbotronBg",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "jumbotronFontSize",
    computeValue: function (settings) { return Math.ceil(settings.fontSizeBase * 1.5); }
  },
  {
    settingName: "stateSuccessBorder",
    computeValue: function (settings) { return absoluteDarken(spin(settings.stateSuccessBg, -10), 5); }
  },
  {
    settingName: "stateInfoBorder",
    computeValue: function (settings) { return absoluteDarken(spin(settings.stateInfoBg, -10), 7); }
  },
  {
    settingName: "stateWarningBorder",
    computeValue: function (settings) { return absoluteDarken(spin(settings.stateWarningBg, -10), 5); }
  },
  {
    settingName: "stateDangerBorder",
    computeValue: function (settings) { return absoluteDarken(spin(settings.stateDangerBg, -10), 5); }
  },
  {
    settingName: "tooltipArrowColor",
    computeValue: function (settings) { return settings.tooltipBg; }
  },
  {
    settingName: "popoverTitleBg",
    computeValue: function (settings) { return absoluteDarken(settings.popoverBg, 3); }
  },
  {
    settingName: "popoverArrowColor",
    computeValue: function (settings) { return settings.popoverBg; }
  },
  {
    settingName: "popoverArrowOuterWidth",
    computeValue: function (settings) { return settings.popoverArrowWidth + 1; }
  },
  {
    settingName: "popoverArrowOuterColor",
    computeValue: function (settings) { return fade(settings.popoverBorderColor, 5); }
  },
  {
    settingName: "popoverArrowOuterFallbackColor",
    computeValue: function (settings) { return absoluteDarken(settings.popoverFallbackBorderColor, 20); }
  },
  {
    settingName: "labelDefaultBg",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "labelPrimaryBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "labelSuccessBg",
    computeValue: function (settings) { return settings.brandSuccess; }
  },
  {
    settingName: "labelInfoBg",
    computeValue: function (settings) { return settings.brandInfo; }
  },
  {
    settingName: "labelWarningBg",
    computeValue: function (settings) { return settings.brandWarning; }
  },
  {
    settingName: "labelDangerBg",
    computeValue: function (settings) { return settings.brandDanger; }
  },
  {
    settingName: "modalTitleLineHeight",
    computeValue: function (settings) { return settings.lineHeightBase; }
  },
  {
    settingName: "modalFooterBorderColor",
    computeValue: function (settings) { return settings.modalHeaderBorderColor; }
  },
  {
    settingName: "alertBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "alertSuccessBg",
    computeValue: function (settings) { return settings.stateSuccessBg; }
  },
  {
    settingName: "alertSuccessText",
    computeValue: function (settings) { return settings.stateSuccessText; }
  },
  {
    settingName: "alertSuccessBorder",
    computeValue: function (settings) { return settings.stateSuccessBorder; }
  },
  {
    settingName: "alertInfoBg",
    computeValue: function (settings) { return settings.stateInfoBg; }
  },
  {
    settingName: "alertInfoText",
    computeValue: function (settings) { return settings.stateInfoText; }
  },
  {
    settingName: "alertInfoBorder",
    computeValue: function (settings) { return settings.stateInfoBorder; }
  },
  {
    settingName: "alertWarningBg",
    computeValue: function (settings) { return settings.stateWarningBg; }
  },
  {
    settingName: "alertWarningText",
    computeValue: function (settings) { return settings.stateWarningText; }
  },
  {
    settingName: "alertWarningBorder",
    computeValue: function (settings) { return settings.stateWarningBorder; }
  },
  {
    settingName: "alertDangerBg",
    computeValue: function (settings) { return settings.stateDangerBg; }
  },
  {
    settingName: "alertDangerText",
    computeValue: function (settings) { return settings.stateDangerText; }
  },
  {
    settingName: "alertDangerBorder",
    computeValue: function (settings) { return settings.stateDangerBorder; }
  },
  {
    settingName: "progressBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "progressBarBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "progressBarSuccessBg",
    computeValue: function (settings) { return settings.brandSuccess; }
  },
  {
    settingName: "progressBarWarningBg",
    computeValue: function (settings) { return settings.brandWarning; }
  },
  {
    settingName: "progressBarDangerBg",
    computeValue: function (settings) { return settings.brandDanger; }
  },
  {
    settingName: "progressBarInfoBg",
    computeValue: function (settings) { return settings.brandInfo; }
  },
  {
    settingName: "listGroupBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "listGroupActiveColor",
    computeValue: function (settings) { return settings.componentActiveColor; }
  },
  {
    settingName: "listGroupActiveBg",
    computeValue: function (settings) { return settings.componentActiveBg; }
  },
  {
    settingName: "listGroupActiveBorder",
    computeValue: function (settings) { return settings.listGroupActiveBg; }
  },
  {
    settingName: "listGroupActiveTextColor",
    computeValue: function (settings) { return absoluteLighten(settings.listGroupActiveBg, 40); }
  },
  {
    settingName: "listGroupDisabledColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "listGroupDisabledBg",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "listGroupDisabledTextColor",
    computeValue: function (settings) { return settings.listGroupDisabledColor; }
  },
  {
    settingName: "listGroupLinkHoverColor",
    computeValue: function (settings) { return settings.listGroupLinkColor; }
  },
  {
    settingName: "panelFooterPadding",
    computeValue: function (settings) { return settings.panelHeadingPadding; }
  },
  {
    settingName: "panelBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "panelDefaultText",
    computeValue: function (settings) { return settings.grayDark; }
  },
  {
    settingName: "panelPrimaryBorder",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "panelPrimaryHeadingBg",
    computeValue: function (settings) { return settings.brandPrimary; }
  },
  {
    settingName: "panelSuccessText",
    computeValue: function (settings) { return settings.stateSuccessText; }
  },
  {
    settingName: "panelSuccessBorder",
    computeValue: function (settings) { return settings.stateSuccessBorder; }
  },
  {
    settingName: "panelSuccessHeadingBg",
    computeValue: function (settings) { return settings.stateSuccessBg; }
  },
  {
    settingName: "panelInfoText",
    computeValue: function (settings) { return settings.stateInfoText; }
  },
  {
    settingName: "panelInfoBorder",
    computeValue: function (settings) { return settings.stateInfoBorder; }
  },
  {
    settingName: "panelInfoHeadingBg",
    computeValue: function (settings) { return settings.stateInfoBg; }
  },
  {
    settingName: "panelWarningText",
    computeValue: function (settings) { return settings.stateWarningText; }
  },
  {
    settingName: "panelWarningBorder",
    computeValue: function (settings) { return settings.stateWarningBorder; }
  },
  {
    settingName: "panelWarningHeadingBg",
    computeValue: function (settings) { return settings.stateWarningBg; }
  },
  {
    settingName: "panelDangerText",
    computeValue: function (settings) { return settings.stateDangerText; }
  },
  {
    settingName: "panelDangerBorder",
    computeValue: function (settings) { return settings.stateDangerBorder; }
  },
  {
    settingName: "panelDangerHeadingBg",
    computeValue: function (settings) { return settings.stateDangerBg; }
  },
  {
    settingName: "thumbnailBg",
    computeValue: function (settings) { return settings.bodyBg; }
  },
  {
    settingName: "thumbnailBorderRadius",
    computeValue: function (settings) { return settings.borderRadiusBase; }
  },
  {
    settingName: "thumbnailCaptionColor",
    computeValue: function (settings) { return settings.textColor; }
  },
  {
    settingName: "wellBorder",
    computeValue: function (settings) { return absoluteDarken(settings.wellBg, 7); }
  },
  {
    settingName: "badgeBg",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "badgeActiveColor",
    computeValue: function (settings) { return settings.linkColor; }
  },
  {
    settingName: "breadcrumbActiveColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "preColor",
    computeValue: function (settings) { return settings.grayDark; }
  },
  {
    settingName: "textMuted",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "abbrBorderColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "headingsSmallColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "blockquoteSmallColor",
    computeValue: function (settings) { return settings.grayLight; }
  },
  {
    settingName: "blockquoteFontSize",
    computeValue: function (settings) { return settings.fontSizeBase * 1.25; }
  },
  {
    settingName: "blockquoteBorderColor",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "pageHeaderBorderColor",
    computeValue: function (settings) { return settings.grayLighter; }
  },
  {
    settingName: "dlHorizontalOffset",
    computeValue: function (settings) { return settings.componentOffsetHorizontal; }
  },
  {
    settingName: "hrBorder",
    computeValue: function (settings) { return settings.grayLighter; }
  }
];

// getComputedVariables expects ALL settings to be available in staticSettings
// Optional overrideSettings object for user supplied hardcoded values
module.exports = function (staticSettings, overrideSettings) {
  var newSettings = clone(staticSettings);

  overrideSettings = overrideSettings || {};

  // Because some computed values depend on previous computed values,
  // We need to pass in the curre
  computedValuesArray.forEach(function (computedValueObj) {
    // Use the passed in overide value or compute the value
    newSettings[computedValueObj.settingName] =
      overrideSettings[computedValueObj.settingName] ||
      computedValueObj.computeValue(newSettings);
  });

  return newSettings;
};
