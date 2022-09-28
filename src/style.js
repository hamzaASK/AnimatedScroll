// import { StyleSheet } from 'react-native'
// import theme from '../../constants/theme'
// import { height, width } from '../data/variables'
// export default class StyleSheetFactory
// {
//     static getSheet ( x )
//     {
//         return StyleSheet.create( {
//             //Home
//             container: { width: width, height: height, backgroundColor: theme.Themes[ x ].backgroundColorContainer },
//             containerItem: { marginLeft: 20, width: width / 2, height: 200, borderRadius: 10, },
//             containItem: { backgroundColor: '#f3f3f3', marginVertical: 6, height: 50, width: width / 1.3, borderBottomRightRadius: 20, borderTopRightRadius: 20, borderColor: '#78777f', borderWidth: 1, justifyContent: 'center', },
//             containerDrawer: { width: width / 1.3, height: height, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.Themes[ x ].backgroundColorContainer, },
//             itemContainer: { height: 30, width, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' },
//             containerCenter: { padding: 30, width: width, height: height, backgroundColor: theme.Themes[ x ].backgroundColorContainer },

//             //
//             bottomBlock: { justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
//             themeView: { flexDirection: 'row', marginVertical: 20, alignContent: 'center', marginLeft: 20, width: width / 1.3 },
//             configurationSection: { borderTopWidth: 1, borderColor: '#e6e6e6', paddingTop: 30, },
//             drawTop: { flex: 3, borderBottomWidth: 1, borderColor: '#e6e6e6' },
//             drawMed: { flex: 10, width: width / 1.3 },
//             drawBottom: { width: width / 1.3, flex: 1, borderTopWidth: 1, borderColor: '#e6e6e6' },
//             touchable: { justifyContent: 'space-around', flexDirection: 'row' },
//             listItemClicked: { width: 20, height: 20, borderRadius: 10, borderColor: '#c3c3c3', alignSelf: 'center', backgroundColor: '#c3c3c3', marginRight: 20 },
//             listItem: { width: 20, height: 20, borderRadius: 10, borderColor: '#c3c3c3', borderWidth: 2, alignSelf: 'center', marginRight: 20 },
//             //
//             // input: { paddingLeft: 2, height: 40, borderBottomWidth: 2, borderColor: theme.Themes[ x ].colorFont2, color: theme.Themes[ x ].colorFont1 },
//             btn: { backgroundColor: '#7726c7', borderRadius: 2, height: 40, justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial' },
//             comboBox: { borderBottomWidth: 2, borderColor: theme.Themes[ x ].colorFont2, marginTop: 20, padding: 5, color: theme.Themes[ x ].colorFont1, backgroundColor: theme.Themes[ x ].backgroundColorContainer },
//             //
//             scrollview: { justifyContent: 'center', alignItems: 'center', height: 210 },
//             scrollContent: { flexGrow: 1, justifyContent: 'center', width: width },

//             //
//             itemTitleDriwer: { color: theme.Themes[ x ].colorFont1 },
//             fontColor: { color: theme.Themes[ x ].colorFont1 },
//             itemTitle: { color: theme.Themes[ x ].colorFont1, fontSize: 18, fontWeight: 'bold' },
//             textNormal: { color: theme.Themes[ x ].colorFont1 },
//             textTitleItem: { fontWeight: 'bold', marginTop: 6, marginLeft: 10, color: theme.Themes[ x ].colorFont1 },
//             textTitle2Item: { fontWeight: 'bold', fontSize: 24, marginTop: 6, marginLeft: 10, color: theme.Themes[ x ].colorFont1 },
//             textTitle3Item: { borderBottomWidth: 2, borderColor: '#383838', paddingVertical: 10, fontWeight: 'bold', fontSize: 16, marginTop: 6, marginLeft: 10, color: theme.Themes[ x ].colorFont1 },
//             //
//             iconItem: { marginTop: 10, marginLeft: 10, backgroundColor: '#f8f8f8', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
//             iconItemBottom: { flex: 3, alignItems: 'flex-end', marginRight: 30 },
//             itemIcon: { flex: 0.5, paddingHorizontal: 6 },
//             iconsView: { flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 },
//             icons: { flex: 1, flexDirection: 'row', justifyContent: 'center' },
//             img: { marginVertical: 20, backgroundColor: '#e1e1e1', width: 160, height: 160, borderRadius: 80 },
//             imgProfil: { flex: 2, justifyContent: 'center', width: width / 1.3 },
//             imgBackground: { width: width / 1.3, height: height, justifyContent: 'center', alignItems: 'center' },
//             imgDrawer: { width: 80, height: 80, borderRadius: 80 / 2, borderColor: '#000', borderWidth: 1, },
//             img: { width: 130, height: 130, borderRadius: 130 / 2, borderColor: '#000', borderWidth: 2 },
//             //
//             btnConnexion: { borderRadius: 40, height: 60, width: 80, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, color: theme.Themes[ x ].colorFont1, fontFamily: 'Arial', borderColor: '#000', borderWidth: 2 },
//             onError: { borderColor: 'red', borderWidth: 1, paddingLeft: 2, height: 40, borderBottomWidth: 2, color: theme.Themes[ x ].colorFont1 },
//             searchSection: {
//                 flex: 1,
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#fff',
//             },
//             searchIcon: {
//                 padding: 10,
//             },
//             input: {
//                 flex: 1,
//                 paddingTop: 10,
//                 paddingRight: 10,
//                 paddingBottom: 10,
//                 paddingLeft: 0,
//                 backgroundColor: '#fff',
//                 color: '#424242',
//             },
//         } )
//     }
// }
