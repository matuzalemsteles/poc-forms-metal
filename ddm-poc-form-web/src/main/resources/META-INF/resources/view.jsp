<%--
/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />-container"></div>

<aui:script require="<%= mainRequire %>">
		const spritemap = 'http://localhost:8080/o/admin-theme/images/clay/icons.svg';
		const listFields = [
			{
				name: 'Date',
				type: 'date',
				icon: 'calendar',
				description: 'Select date from a Datepicker.'
			},
			{
				name: 'Text Field',
				type: 'text',
				icon: 'text',
				description: 'Single line or multiline text area.'
			},
			{
				name: 'Single Selection',
				type: 'radio',
				icon: 'radio-button',
				description: 'Select only one item with a radio button.'
			},
			{
				name: 'Select from list',
				type: 'select',
				icon: 'list',
				description: 'Choose an or more options from a list.'
			}
		];
		const context = [{
			title: 'Untitled name',
			rows: [
				{
					columns: [
						{
							fields: [
								{
									type: 'radio',
									label: 'Radio'
								}
							],
							size: 3
						},
						{
							fields: [],
							size: 9
						}
					]
				},
				{
					columns: [
						{
							fields: [
								{
									type: 'text',
									label: 'Text',
									required: true,
									spritemap: spritemap,
								}
							],
							size: 4
						},
						{
							fields: [
								{
									type: 'select',
									label: 'Select',
									required: true,
									spritemap: spritemap,
									items: [
										{
											name: 'Foo'
										},
										{
											name: 'Bar'
										}
									]
								}
							],
							size: 6
						},
						{
							fields: [],
							size: 2
						}
					]
				},
				{
					columns: [
						{
							fields: [
								{
									type: 'text',
									label: 'Second row',
									required: true,
									spritemap: spritemap,
								}
							],
							size: 12
						}
					]
				}
			]
		}];
		const fieldContext = [{"showRequiredFieldsWarning":false,"description":null,"localizedDescription":{},"rows":[{"columns":[{"size":12,"fields":[{"fieldName":"text","tooltip":"","autoFocus":false,"dir":"ltr","locale":"en_US","type":"key_value","localizedValue":{"en_US":""},"required":false,"showLabel":true,"valid":true,"instanceId":"7n7CF4Jn","strings":{"cancel":"Cancel","done":"Done","keyLabel":"Field Name"},"repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"TRUE","name":"ddm$$label$7n7CF4Jn$0$$en_US","localizable":true},{"fieldName":"tip","tooltip":"","dir":"ltr","locale":"en_US","type":"text","localizedValue":{"en_US":""},"required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"c3jsq4U9","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"TRUE","autocompleteEnabled":false,"name":"ddm$$tip$c3jsq4U9$0$$en_US","localizable":true},{"fieldName":"displayStyle","visible":true,"valueChanged":false,"dataType":"string","predefinedValue":"","errorMessage":"","readOnly":false,"label":"","dir":"ltr","locale":"en_US","type":"radio","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"yUVpU9A4","inline":false,"repeatable":false,"name":"ddm$$displayStyle$yUVpU9A4$0$$en_US","options":[{"label":"A Single Line","value":"singleline"},{"label":"Multiple Lines","value":"multiline"}],"localizable":false,"pathThemeImages":"","value":"singleline","validation":{"expression":"","dataType":"string","errorMessage":""}},{"fieldName":"required","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"l7udI054","repeatable":false,"name":"ddm$$required$l7udI054$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":false,"validation":{"expression":"","dataType":"boolean","errorMessage":""}}]}]}],"title":null,"enabled":true,"localizedTitle":{}},{"showRequiredFieldsWarning":true,"description":null,"localizedDescription":{},"rows":[{"columns":[{"size":12,"fields":[{"fieldName":"predefinedValue","tooltip":"","dir":"ltr","locale":"en_US","type":"text","localizedValue":{"en_US":""},"required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"LGPOxxTx","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"TRUE","autocompleteEnabled":false,"name":"ddm$$predefinedValue$LGPOxxTx$0$$en_US","localizable":true},{"fieldName":"placeholder","tooltip":"","dir":"ltr","locale":"en_US","type":"text","localizedValue":{"en_US":""},"required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"luBlqvYG","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"TRUE","autocompleteEnabled":false,"name":"ddm$$placeholder$luBlqvYG$0$$en_US","localizable":true},{"fieldName":"visibilityExpression","tooltip":"","dir":"ltr","locale":"en_US","type":"text","required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"0fZT4lRn","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$visibilityExpression$0fZT4lRn$0$$en_US","localizable":false},{"fieldName":"fieldNamespace","tooltip":"","dir":"ltr","locale":"en_US","type":"text","required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"IKeS44ES","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$fieldNamespace$IKeS44ES$0$$en_US","localizable":false},{"fieldName":"indexType","visible":true,"valueChanged":false,"dataType":"string","predefinedValue":"","errorMessage":"","readOnly":false,"label":"","dir":"ltr","locale":"en_US","type":"radio","required":false,"showLabel":true,"valid":true,"visibilityExpression":"FALSE","instanceId":"o6A6bFDg","inline":false,"repeatable":false,"name":"ddm$$indexType$o6A6bFDg$0$$en_US","options":[{"label":"Not Indexable","value":""},{"label":"Indexable - Keyword","value":"keyword"},{"label":"Indexable - Text","value":"text"}],"localizable":false,"pathThemeImages":"","value":"keyword","validation":{"expression":"","dataType":"string","errorMessage":""}},{"fieldName":"localizable","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"FALSE","instanceId":"PvQbkMem","repeatable":false,"name":"ddm$$localizable$PvQbkMem$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":true,"validation":{"expression":"","dataType":"boolean","errorMessage":""}},{"fieldName":"readOnly","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"FALSE","instanceId":"GqnAZacX","repeatable":false,"name":"ddm$$readOnly$GqnAZacX$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":false,"validation":{"expression":"","dataType":"boolean","errorMessage":""}},{"evaluable":true,"fieldName":"dataType","tooltip":"","dir":"ltr","locale":"en_US","type":"text","required":true,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"nzS2LJVd","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"string","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$dataType$nzS2LJVd$0$$en_US","localizable":false},{"evaluable":true,"fieldName":"type","tooltip":"","dir":"ltr","locale":"en_US","type":"text","required":true,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"6cKybg2R","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"text","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$type$6cKybg2R$0$$en_US","localizable":false},{"evaluable":true,"fieldName":"name","tooltip":"","dir":"ltr","locale":"en_US","type":"text","required":true,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"RZQiooVY","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"text","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$name$RZQiooVY$0$$en_US","localizable":false},{"fieldName":"showLabel","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"pPtkRmX1","repeatable":false,"name":"ddm$$showLabel$pPtkRmX1$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":true,"validation":{"expression":"","dataType":"boolean","errorMessage":""}},{"fieldName":"repeatable","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"UkWhNJVW","repeatable":false,"name":"ddm$$repeatable$UkWhNJVW$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":false,"validation":{"expression":"","dataType":"boolean","errorMessage":""}},{"fieldName":"validation","visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","dir":"ltr","locale":"en_US","type":"validation","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"qQm9qZaP","repeatable":false,"name":"ddm$$validation$qQm9qZaP$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":{"expression":"","errorMessage":""},"validation":{"expression":"","dataType":"string","errorMessage":""}},{"fieldName":"autocomplete","visible":true,"valueChanged":false,"dataType":"boolean","predefinedValue":false,"errorMessage":"","readOnly":false,"showAsSwitcher":false,"label":"","dir":"ltr","locale":"en_US","type":"checkbox","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"IUksTUNI","repeatable":false,"name":"ddm$$autocomplete$IUksTUNI$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":false,"validation":{"expression":"","dataType":"boolean","errorMessage":""}},{"fieldName":"dataSourceType","visible":true,"valueChanged":false,"dataType":"string","predefinedValue":"","errorMessage":"","readOnly":false,"label":"","dir":"ltr","locale":"en_US","type":"radio","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"Wj3CG4jS","inline":false,"repeatable":false,"name":"ddm$$dataSourceType$Wj3CG4jS$0$$en_US","options":[{"label":"Manually","value":"manual"},{"label":"From Data Provider","value":"data-provider"}],"localizable":false,"pathThemeImages":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""}},{"fieldName":"ddmDataProviderInstanceId","predefinedValue":[],"dir":"ltr","locale":"en_US","type":"select","required":false,"showLabel":true,"valid":true,"instanceId":"WydLYm7t","strings":{"emptyList":"No results were found.","search":"Search","dynamicallyLoadedData":"Dynamically Loaded Data","chooseOptions":"Choose Options","chooseAnOption":"Choose an Option"},"repeatable":false,"options":[],"pathThemeImages":"","value":[],"validation":{"expression":"","dataType":"long","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"long","errorMessage":"","multiple":false,"readOnly":false,"label":"","visibilityExpression":"TRUE","name":"ddm$$ddmDataProviderInstanceId$WydLYm7t$0$$en_US","localizable":false,"dataSourceType":"manual"},{"fieldName":"ddmDataProviderInstanceOutput","predefinedValue":[],"dir":"ltr","locale":"en_US","type":"select","required":false,"showLabel":true,"valid":true,"instanceId":"XYcqXQ7J","strings":{"emptyList":"No results were found.","search":"Search","dynamicallyLoadedData":"Dynamically Loaded Data","chooseOptions":"Choose Options","chooseAnOption":"Choose an Option"},"repeatable":false,"options":[],"pathThemeImages":"","value":[],"validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","multiple":false,"readOnly":false,"label":"","visibilityExpression":"TRUE","name":"ddm$$ddmDataProviderInstanceOutput$XYcqXQ7J$0$$en_US","localizable":false,"dataSourceType":"manual"},{"fieldName":"options","visible":true,"valueChanged":false,"allowEmptyOptions":false,"dataType":"ddm-options","errorMessage":"","readOnly":false,"defaultLanguageId":"en_US","label":"","dir":"ltr","locale":"en_US","type":"options","required":false,"showLabel":true,"valid":true,"visibilityExpression":"TRUE","instanceId":"op4JsSX4","repeatable":false,"name":"ddm$$options$op4JsSX4$0$$en_US","options":[],"localizable":false,"pathThemeImages":"","value":{"en_US":[{"label":"Option","value":"Option"}]},"validation":{"expression":"","dataType":"ddm-options","errorMessage":""}},{"fieldName":"tooltip","tooltip":"","dir":"ltr","locale":"en_US","type":"text","localizedValue":{"en_US":""},"required":false,"showLabel":true,"valid":true,"displayStyle":"singleline","instanceId":"HiY5R9H5","repeatable":false,"options":[],"pathThemeImages":"","placeholder":"","value":"","validation":{"expression":"","dataType":"string","errorMessage":""},"visible":true,"valueChanged":false,"dataType":"string","errorMessage":"","readOnly":false,"label":"","visibilityExpression":"FALSE","autocompleteEnabled":false,"name":"ddm$$tooltip$HiY5R9H5$0$$en_US","localizable":true}]}]}],"title":null,"enabled":true,"localizedTitle":{}}];

	main.DDMForm(
		{
			spritemap,
			listFields,
			context,
			fieldContext,
			modules: Liferay.MODULES,
			dependencies: ['ddm-poc-field-type-base']
		}, 
		'#<portlet:namespace />-container',
		function(instance) {
			console.log(instance);
		}
	);
</aui:script>