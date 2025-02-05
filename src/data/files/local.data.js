import { LocalCountryModel } from '../../core/models';
import { SourceNameEnum } from '../../core/enums';

class LocalData {

    constructor() {
        this.countriesList = null;
        this.countriesKeysList = null;
    }

    initiate() {
        this.countriesList = {
            1: new LocalCountryModel({
                id: 1,
                populationCount: 7794798739,
                sourcesData: {
                    [SourceNameEnum.CAC]: [82808887, 1810936, 58153289],
                    [SourceNameEnum.CLN]: [84436810, 1836187, 59249732],
                    [SourceNameEnum.COA]: [83951583, 1827430, 47278729],
                    [SourceNameEnum.CVA]: [84449093, 1836919, 59742153],
                    [SourceNameEnum.CVS]: [4525103, 303351, 1703742],
                    [SourceNameEnum.GOO]: [84669877, 1840712, 59440003],
                    [SourceNameEnum.WIK]: [83963941, 1827544, 47289349],
                    [SourceNameEnum.WOD]: [78720217, 1741808, 54368698]
                }
            }),
            2: new LocalCountryModel({
                id: 2,
                populationCount: 30072,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            3: new LocalCountryModel({
                id: 3,
                populationCount: 245424,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [7504, 100, 5545],
                    [SourceNameEnum.WOD]: null
                }
            }),
            4: new LocalCountryModel({
                id: 4,
                populationCount: 124390,
                sources: null
            }),
            5: new LocalCountryModel({
                id: 5,
                populationCount: 5316320,
                sources: null
            }),
            6: new LocalCountryModel({
                id: 6,
                populationCount: 349000,
                sources: null
            }),
            7: new LocalCountryModel({
                id: 7,
                populationCount: 453376,
                sources: null
            }),
            8: new LocalCountryModel({
                id: 8,
                populationCount: 39344149,
                sourcesData: {
                    [SourceNameEnum.CAC]: [52330, 2189, 41801],
                    [SourceNameEnum.CLN]: [52706, 2221, 42291],
                    [SourceNameEnum.COA]: [51526, 2191, 41727],
                    [SourceNameEnum.CVA]: [52706, 2221, 42291],
                    [SourceNameEnum.CVS]: [5639, 136, 691],
                    [SourceNameEnum.GOO]: [52706, 2221, 42291],
                    [SourceNameEnum.WIK]: [52586, 2211, 42175],
                    [SourceNameEnum.WOD]: null
                }
            }),
            9: new LocalCountryModel({
                id: 9,
                populationCount: 15700,
                sources: null
            }),
            10: new LocalCountryModel({
                id: 10,
                populationCount: 2875795,
                sourcesData: {
                    [SourceNameEnum.CAC]: [57727, 1174, 33185],
                    [SourceNameEnum.CLN]: [58316, 1181, 33634],
                    [SourceNameEnum.COA]: [58316, 1181, 33634],
                    [SourceNameEnum.CVA]: [58316, 1181, 33634],
                    [SourceNameEnum.CVS]: [898, 31, 694],
                    [SourceNameEnum.GOO]: [58316, 1181, 33634],
                    [SourceNameEnum.WIK]: [58316, 1181, 33634],
                    [SourceNameEnum.WOD]: [58316, 1181, 33634]
                }
            }),
            11: new LocalCountryModel({
                id: 11,
                populationCount: 44206445,
                sourcesData: {
                    [SourceNameEnum.CAC]: [99311, 2751, 66855],
                    [SourceNameEnum.CLN]: [99897, 2762, 67395],
                    [SourceNameEnum.COA]: [99897, 2762, 67395],
                    [SourceNameEnum.CVA]: [99897, 2762, 67395],
                    [SourceNameEnum.CVS]: [6442, 529, 3158],
                    [SourceNameEnum.GOO]: [99897, 2762, 67395],
                    [SourceNameEnum.WIK]: [99897, 2762, 67395],
                    [SourceNameEnum.WOD]: null
                }
            }),
            12: new LocalCountryModel({
                id: 12,
                populationCount: 218063,
                sources: null
            }),
            13: new LocalCountryModel({
                id: 13,
                populationCount: 55191,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            14: new LocalCountryModel({
                id: 14,
                populationCount: 77265,
                sourcesData: {
                    [SourceNameEnum.CAC]: [7983, 84, 7384],
                    [SourceNameEnum.CLN]: [8117, 84, 7463],
                    [SourceNameEnum.COA]: [8117, 84, 7463],
                    [SourceNameEnum.CVA]: [8117, 84, 7463],
                    [SourceNameEnum.CVS]: [761, 49, 596],
                    [SourceNameEnum.GOO]: [8117, 84, 7463],
                    [SourceNameEnum.WIK]: [8117, 84, 7463],
                    [SourceNameEnum.WOD]: null
                }
            }),
            15: new LocalCountryModel({
                id: 15,
                populationCount: 33344645,
                sourcesData: {
                    [SourceNameEnum.CAC]: [17433, 405, 10859],
                    [SourceNameEnum.CLN]: [17568, 405, 11146],
                    [SourceNameEnum.COA]: [17568, 405, 11146],
                    [SourceNameEnum.CVA]: [17568, 405, 11146],
                    [SourceNameEnum.CVS]: [48, 2, 14],
                    [SourceNameEnum.GOO]: [17568, 405, 11146],
                    [SourceNameEnum.WIK]: [17553, 405, 11044],
                    [SourceNameEnum.WOD]: null
                }
            }),
            16: new LocalCountryModel({
                id: 16,
                populationCount: 15003,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13, 0, 12],
                    [SourceNameEnum.CLN]: [13, 0, 12],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [13, 0, 12],
                    [SourceNameEnum.CVS]: [13, 0, 12],
                    [SourceNameEnum.GOO]: [13, 0, 12],
                    [SourceNameEnum.WIK]: [13, 0, 12],
                    [SourceNameEnum.WOD]: null
                }
            }),
            17: new LocalCountryModel({
                id: 17,
                populationCount: 2500,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            18: new LocalCountryModel({
                id: 18,
                populationCount: 98263,
                sourcesData: {
                    [SourceNameEnum.CAC]: [158, 5, 148],
                    [SourceNameEnum.CLN]: [159, 5, 148],
                    [SourceNameEnum.COA]: [159, 5, 148],
                    [SourceNameEnum.CVA]: [159, 5, 148],
                    [SourceNameEnum.CVS]: [25, 3, 19],
                    [SourceNameEnum.GOO]: [159, 5, 148],
                    [SourceNameEnum.WIK]: [158, 5, 148],
                    [SourceNameEnum.WOD]: null
                }
            }),
            19: new LocalCountryModel({
                id: 19,
                populationCount: 126933,
                sources: null
            }),
            20: new LocalCountryModel({
                id: 20,
                populationCount: 45384988,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1613928, 43163, 1426676],
                    [SourceNameEnum.CLN]: [1629594, 43319, 1426676],
                    [SourceNameEnum.COA]: [1629594, 43319, 1426676],
                    [SourceNameEnum.CVA]: [1629594, 43319, 1426676],
                    [SourceNameEnum.CVS]: [7134, 353, 0],
                    [SourceNameEnum.GOO]: [1629594, 43319, 1426676],
                    [SourceNameEnum.WIK]: [1629577, 43319, 1426661],
                    [SourceNameEnum.WOD]: [1629594, 43319, 1426676]
                }
            }),
            21: new LocalCountryModel({
                id: 21,
                populationCount: 2965913,
                sourcesData: {
                    [SourceNameEnum.CAC]: [158878, 2807, 141844],
                    [SourceNameEnum.CLN]: [159798, 2836, 143640],
                    [SourceNameEnum.COA]: [159738, 2828, 143355],
                    [SourceNameEnum.CVA]: [159798, 2836, 143640],
                    [SourceNameEnum.CVS]: [3860, 49, 1572],
                    [SourceNameEnum.GOO]: [159798, 2836, 143640],
                    [SourceNameEnum.WIK]: [159738, 2828, 143355],
                    [SourceNameEnum.WOD]: [159798, 2836, 143640]
                }
            }),
            22: new LocalCountryModel({
                id: 22,
                populationCount: 148800,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [1130, 30, 337],
                    [SourceNameEnum.WOD]: null
                }
            }),
            23: new LocalCountryModel({
                id: 23,
                populationCount: 106933,
                sourcesData: {
                    [SourceNameEnum.CAC]: [5442, 49, 5132],
                    [SourceNameEnum.CLN]: [5509, 49, 5179],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [5509, 49, 5179],
                    [SourceNameEnum.CVS]: [101, 3, 93],
                    [SourceNameEnum.GOO]: [5509, 49, 5179],
                    [SourceNameEnum.WIK]: [5509, 49, 5179],
                    [SourceNameEnum.WOD]: null
                }
            }),
            24: new LocalCountryModel({
                id: 24,
                populationCount: 806,
                sources: null
            }),
            25: new LocalCountryModel({
                id: 25,
                populationCount: 4780380,
                sources: null
            }),
            26: new LocalCountryModel({
                id: 26,
                populationCount: 25636204,
                sourcesData: {
                    [SourceNameEnum.CAC]: [28402, 909, 25759],
                    [SourceNameEnum.CLN]: [28402, 909, 25770],
                    [SourceNameEnum.COA]: [28460, 909, 25770],
                    [SourceNameEnum.CVA]: [28402, 909, 25770],
                    [SourceNameEnum.CVS]: [6989, 98, 6301],
                    [SourceNameEnum.GOO]: [28402, 909, 25770],
                    [SourceNameEnum.WIK]: [28381, 909, 25486],
                    [SourceNameEnum.WOD]: null
                }
            }),
            27: new LocalCountryModel({
                id: 27,
                populationCount: 1000,
                sources: null
            }),
            28: new LocalCountryModel({
                id: 28,
                populationCount: 9028089,
                sourcesData: {
                    [SourceNameEnum.CAC]: [357902, 6149, 330990],
                    [SourceNameEnum.CLN]: [362911, 6261, 334901],
                    [SourceNameEnum.COA]: [362911, 6261, 334901],
                    [SourceNameEnum.CVA]: [362911, 6261, 334901],
                    [SourceNameEnum.CVS]: [16058, 626, 14405],
                    [SourceNameEnum.GOO]: [362911, 6275, 336922],
                    [SourceNameEnum.WIK]: [364302, 6275, 336922],
                    [SourceNameEnum.WOD]: [362911, 6261, 334901]
                }
            }),
            29: new LocalCountryModel({
                id: 29,
                populationCount: 0,
                sources: null
            }),
            30: new LocalCountryModel({
                id: 30,
                populationCount: 10180557,
                sourcesData: {
                    [SourceNameEnum.CAC]: [217636, 2609, 180295],
                    [SourceNameEnum.CLN]: [219041, 2670, 188280],
                    [SourceNameEnum.COA]: [219041, 2670, 188280],
                    [SourceNameEnum.CVA]: [219041, 2670, 188280],
                    [SourceNameEnum.CVS]: [2879, 35, 1833],
                    [SourceNameEnum.GOO]: [219041, 2670, 188280],
                    [SourceNameEnum.WIK]: [219041, 2670, 188280],
                    [SourceNameEnum.WOD]: [219041, 2670, 188280]
                }
            }),
            31: new LocalCountryModel({
                id: 31,
                populationCount: 0,
                sources: null
            }),
            32: new LocalCountryModel({
                id: 32,
                populationCount: 7887,
                sourcesData: {
                    [SourceNameEnum.CAC]: [7857, 170, 6221],
                    [SourceNameEnum.CLN]: [7887, 171, 6239],
                    [SourceNameEnum.COA]: [7887, 171, 6239],
                    [SourceNameEnum.CVA]: [7887, 171, 6239],
                    [SourceNameEnum.CVS]: [96, 11, 0],
                    [SourceNameEnum.GOO]: [7887, 171, 6239],
                    [SourceNameEnum.WIK]: [7788, 169, 6166],
                    [SourceNameEnum.WOD]: [7887, 171, 6239]
                }
            }),
            33: new LocalCountryModel({
                id: 33,
                populationCount: 1725602,
                sourcesData: {
                    [SourceNameEnum.CAC]: [92425, 352, 90026],
                    [SourceNameEnum.CLN]: [92913, 352, 90369],
                    [SourceNameEnum.COA]: [92913, 352, 90369],
                    [SourceNameEnum.CVA]: [92913, 352, 90369],
                    [SourceNameEnum.CVS]: [6198, 10, 2353],
                    [SourceNameEnum.GOO]: [92913, 352, 90369],
                    [SourceNameEnum.WIK]: [92913, 352, 90369],
                    [SourceNameEnum.WOD]: [92913, 352, 90369]
                }
            }),
            34: new LocalCountryModel({
                id: 34,
                populationCount: 0,
                sources: null
            }),
            35: new LocalCountryModel({
                id: 35,
                populationCount: 0,
                sources: null
            }),
            378: new LocalCountryModel({
                id: 378,
                populationCount: 0,
                sources: null
            }),
            36: new LocalCountryModel({
                id: 36,
                populationCount: 165433556,
                sourcesData: {
                    [SourceNameEnum.CAC]: [512496, 7531, 456070],
                    [SourceNameEnum.CLN]: [515184, 7599, 459620],
                    [SourceNameEnum.COA]: [514500, 7576, 458656],
                    [SourceNameEnum.CVA]: [515184, 7599, 459620],
                    [SourceNameEnum.CVS]: [3361, 283, 3361],
                    [SourceNameEnum.GOO]: [515184, 7599, 459620],
                    [SourceNameEnum.WIK]: [514500, 7576, 458656],
                    [SourceNameEnum.WOD]: null
                }
            }),
            37: new LocalCountryModel({
                id: 37,
                populationCount: 4273149,
                sources: null
            }),
            38: new LocalCountryModel({
                id: 38,
                populationCount: 287542,
                sourcesData: {
                    [SourceNameEnum.CAC]: [372, 7, 312],
                    [SourceNameEnum.CLN]: [395, 7, 319],
                    [SourceNameEnum.COA]: [395, 7, 319],
                    [SourceNameEnum.CVA]: [395, 7, 319],
                    [SourceNameEnum.CVS]: [85, 7, 65],
                    [SourceNameEnum.GOO]: [395, 7, 319],
                    [SourceNameEnum.WIK]: [395, 7, 319],
                    [SourceNameEnum.WOD]: null
                }
            }),
            39: new LocalCountryModel({
                id: 39,
                populationCount: 4063293,
                sources: null
            }),
            40: new LocalCountryModel({
                id: 40,
                populationCount: 2189534,
                sources: null
            }),
            41: new LocalCountryModel({
                id: 41,
                populationCount: 9447654,
                sourcesData: {
                    [SourceNameEnum.CAC]: [192361, 1414, 171901],
                    [SourceNameEnum.CLN]: [198125, 1442, 181109],
                    [SourceNameEnum.COA]: [196223, 1433, 178102],
                    [SourceNameEnum.CVA]: [198125, 1442, 181109],
                    [SourceNameEnum.CVS]: [26772, 151, 8168],
                    [SourceNameEnum.GOO]: [198125, 1442, 181109],
                    [SourceNameEnum.WIK]: [198125, 1442, 181109],
                    [SourceNameEnum.WOD]: [198125, 1442, 181109]
                }
            }),
            42: new LocalCountryModel({
                id: 42,
                populationCount: 11612315,
                sourcesData: {
                    [SourceNameEnum.CAC]: [641411, 19361, 44136],
                    [SourceNameEnum.CLN]: [648289, 19581, 44787],
                    [SourceNameEnum.COA]: [648289, 19581, 0],
                    [SourceNameEnum.CVA]: [648289, 19581, 44787],
                    [SourceNameEnum.CVS]: [54288, 8903, 14111],
                    [SourceNameEnum.GOO]: [648289, 19581, 44787],
                    [SourceNameEnum.WIK]: [648289, 19581, null],
                    [SourceNameEnum.WOD]: [648289, 19581, 44787]
                }
            }),
            43: new LocalCountryModel({
                id: 43,
                populationCount: 400965,
                sourcesData: {
                    [SourceNameEnum.CAC]: [10724, 242, 9689],
                    [SourceNameEnum.CLN]: [10776, 248, 9795],
                    [SourceNameEnum.COA]: [10776, 248, 9795],
                    [SourceNameEnum.CVA]: [10776, 248, 9795],
                    [SourceNameEnum.CVS]: [18, 2, 16],
                    [SourceNameEnum.GOO]: [10776, 248, 9795],
                    [SourceNameEnum.WIK]: [10370, 226, 8933],
                    [SourceNameEnum.WOD]: null
                }
            }),
            44: new LocalCountryModel({
                id: 44,
                populationCount: 3251,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3251, 44, 3061],
                    [SourceNameEnum.CLN]: [3251, 44, 3061],
                    [SourceNameEnum.COA]: [3251, 44, 3061],
                    [SourceNameEnum.CVA]: [3251, 44, 3061],
                    [SourceNameEnum.CVS]: [339, 2, 83],
                    [SourceNameEnum.GOO]: [3251, 44, 3088],
                    [SourceNameEnum.WIK]: [3167, 44, 3061],
                    [SourceNameEnum.WOD]: null
                }
            }),
            45: new LocalCountryModel({
                id: 45,
                populationCount: 62278,
                sourcesData: {
                    [SourceNameEnum.CAC]: [595, 10, 421],
                    [SourceNameEnum.CLN]: [6040, 10, 445],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [604, 10, 445],
                    [SourceNameEnum.CVS]: [122, 9, 66],
                    [SourceNameEnum.GOO]: [604, 10, 445],
                    [SourceNameEnum.WIK]: [610, 10, 445],
                    [SourceNameEnum.WOD]: null
                }
            }),
            46: new LocalCountryModel({
                id: 46,
                populationCount: 775446,
                sourcesData: {
                    [SourceNameEnum.CAC]: [655, 0, 447],
                    [SourceNameEnum.CLN]: [689, 0, 449],
                    [SourceNameEnum.COA]: [689, 0, 449],
                    [SourceNameEnum.CVA]: [689, 0, 449],
                    [SourceNameEnum.CVS]: [20, 0, 5],
                    [SourceNameEnum.GOO]: [689, 0, 449],
                    [SourceNameEnum.WIK]: [689, 0, 449],
                    [SourceNameEnum.WOD]: null
                }
            }),
            47: new LocalCountryModel({
                id: 47,
                populationCount: 11746103,
                sourcesData: {
                    [SourceNameEnum.CAC]: [158372, 9149, 131579],
                    [SourceNameEnum.CLN]: [160985, 9175, 132510],
                    [SourceNameEnum.COA]: [160985, 9175, 132510],
                    [SourceNameEnum.CVA]: [160985, 9175, 132510],
                    [SourceNameEnum.CVS]: [3148, 142, 339],
                    [SourceNameEnum.GOO]: [160985, 9175, 132510],
                    [SourceNameEnum.WIK]: [160985, 9175, 132510],
                    [SourceNameEnum.WOD]: [160985, 9175, 132510]
                }
            }),
            48: new LocalCountryModel({
                id: 48,
                populationCount: 20104,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: [196, 3, 180],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [196, 3, 180],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [196, 3, 180],
                    [SourceNameEnum.WIK]: [142, 3, 138],
                    [SourceNameEnum.WOD]: null
                }
            }),
            49: new LocalCountryModel({
                id: 49,
                populationCount: 3270140,
                sourcesData: {
                    [SourceNameEnum.CAC]: [110985, 4050, 77225],
                    [SourceNameEnum.CLN]: [112143, 4086, 77682],
                    [SourceNameEnum.COA]: [112143, 4086, 77682],
                    [SourceNameEnum.CVA]: [112143, 4086, 77682],
                    [SourceNameEnum.CVS]: [2218, 122, 1272],
                    [SourceNameEnum.GOO]: [112143, 4086, 77682],
                    [SourceNameEnum.WIK]: [112143, 4086, 77682],
                    [SourceNameEnum.WOD]: [112143, 4086, 77682]
                }
            }),
            50: new LocalCountryModel({
                id: 50,
                populationCount: 2372150,
                sourcesData: {
                    [SourceNameEnum.CAC]: [14700, 40, 12006],
                    [SourceNameEnum.CLN]: [14805, 42, 12136],
                    [SourceNameEnum.COA]: [14805, 42, 12136],
                    [SourceNameEnum.CVA]: [14805, 42, 12136],
                    [SourceNameEnum.CVS]: [24, 1, 17],
                    [SourceNameEnum.GOO]: [14805, 42, 12136],
                    [SourceNameEnum.WIK]: [12340, 40, 11627],
                    [SourceNameEnum.WOD]: null
                }
            }),
            51: new LocalCountryModel({
                id: 51,
                populationCount: 249358,
                sources: null
            }),
            52: new LocalCountryModel({
                id: 52,
                populationCount: 0,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            53: new LocalCountryModel({
                id: 53,
                populationCount: 213239017,
                sourcesData: {
                    [SourceNameEnum.CAC]: [7619970, 193940, 6707781],
                    [SourceNameEnum.CLN]: [7700578, 195441, 6756284],
                    [SourceNameEnum.COA]: [7700578, 195411, 6855372],
                    [SourceNameEnum.CVA]: [7700578, 195441, 6756284],
                    [SourceNameEnum.CVS]: [203165, 13999, 79479],
                    [SourceNameEnum.GOO]: [7700578, 195441, 6756284],
                    [SourceNameEnum.WIK]: [7700578, 195441, 6756284],
                    [SourceNameEnum.WOD]: [7700578, 195441, 6756284]
                }
            }),
            54: new LocalCountryModel({
                id: 54,
                populationCount: 250,
                sources: null
            }),
            55: new LocalCountryModel({
                id: 55,
                populationCount: 3000,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            56: new LocalCountryModel({
                id: 56,
                populationCount: 439314,
                sourcesData: {
                    [SourceNameEnum.CAC]: [157, 3, 149],
                    [SourceNameEnum.CLN]: [157, 3, 149],
                    [SourceNameEnum.COA]: [157, 3, 149],
                    [SourceNameEnum.CVA]: [157, 3, 149],
                    [SourceNameEnum.CVS]: [141, 1, 134],
                    [SourceNameEnum.GOO]: [157, 3, 149],
                    [SourceNameEnum.WIK]: [150, 3, 145],
                    [SourceNameEnum.WOD]: null
                }
            }),
            57: new LocalCountryModel({
                id: 57,
                populationCount: 83516,
                sources: null
            }),
            58: new LocalCountryModel({
                id: 58,
                populationCount: 6925085,
                sourcesData: {
                    [SourceNameEnum.CAC]: [201220, 7515, 118335],
                    [SourceNameEnum.CLN]: [202540, 7604, 120343],
                    [SourceNameEnum.COA]: [202540, 7604, 120343],
                    [SourceNameEnum.CVA]: [202540, 7604, 120343],
                    [SourceNameEnum.CVS]: [2100, 99, 531],
                    [SourceNameEnum.GOO]: [202540, 7604, 120343],
                    [SourceNameEnum.WIK]: [202540, 7604, 120343],
                    [SourceNameEnum.WOD]: [202540, 7604, 120343]
                }
            }),
            59: new LocalCountryModel({
                id: 59,
                populationCount: 21169407,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6631, 84, 4978],
                    [SourceNameEnum.CLN]: [6828, 85, 5152],
                    [SourceNameEnum.COA]: [6828, 85, 5152],
                    [SourceNameEnum.CVA]: [6828, 85, 5152],
                    [SourceNameEnum.CVS]: [773, 51, 592],
                    [SourceNameEnum.GOO]: [6828, 85, 5152],
                    [SourceNameEnum.WIK]: [5649, 77, 4018],
                    [SourceNameEnum.WOD]: null
                }
            }),
            60: new LocalCountryModel({
                id: 60,
                populationCount: 12053968,
                sourcesData: {
                    [SourceNameEnum.CAC]: [809, 2, 687],
                    [SourceNameEnum.CLN]: [822, 2, 687],
                    [SourceNameEnum.COA]: [822, 2, 687],
                    [SourceNameEnum.CVA]: [822, 2, 687],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [822, 2, 707],
                    [SourceNameEnum.WIK]: [760, 2, 687],
                    [SourceNameEnum.WOD]: null
                }
            }),
            61: new LocalCountryModel({
                id: 61,
                populationCount: 984511,
                sources: null
            }),
            62: new LocalCountryModel({
                id: 62,
                populationCount: 16824417,
                sourcesData: {
                    [SourceNameEnum.CAC]: [364, 0, 361],
                    [SourceNameEnum.CLN]: [379, 0, 362],
                    [SourceNameEnum.COA]: [379, 0, 362],
                    [SourceNameEnum.CVA]: [379, 0, 362],
                    [SourceNameEnum.CVS]: [122, 0, 121],
                    [SourceNameEnum.GOO]: [379, 0, 362],
                    [SourceNameEnum.WIK]: [378, 0, 362],
                    [SourceNameEnum.WOD]: null
                }
            }),
            63: new LocalCountryModel({
                id: 63,
                populationCount: 26851208,
                sourcesData: {
                    [SourceNameEnum.CAC]: [26277, 448, 24892],
                    [SourceNameEnum.CLN]: [26848, 448, 24892],
                    [SourceNameEnum.COA]: [26848, 448, 24892],
                    [SourceNameEnum.CVA]: [26848, 448, 24892],
                    [SourceNameEnum.CVS]: [2954, 139, 1553],
                    [SourceNameEnum.GOO]: [26848, 448, 25468],
                    [SourceNameEnum.WIK]: [25849, 448, 24892],
                    [SourceNameEnum.WOD]: null
                }
            }),
            64: new LocalCountryModel({
                id: 64,
                populationCount: 37894326,
                sourcesData: {
                    [SourceNameEnum.CAC]: [572982, 15472, 484583],
                    [SourceNameEnum.CLN]: [582697, 15606, 489819],
                    [SourceNameEnum.COA]: [585374, 15643, 494437],
                    [SourceNameEnum.CVA]: [582697, 15606, 489819],
                    [SourceNameEnum.CVS]: [73401, 5472, 36091],
                    [SourceNameEnum.GOO]: [582697, 15606, 489819],
                    [SourceNameEnum.WIK]: [582697, 15606, 489819],
                    [SourceNameEnum.WOD]: [582697, 15606, 489819]
                }
            }),
            65: new LocalCountryModel({
                id: 65,
                populationCount: 2153389,
                sources: null
            }),
            66: new LocalCountryModel({
                id: 66,
                populationCount: 558657,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [11872, 113, 11569],
                    [SourceNameEnum.COA]: [11872, 113, 11569],
                    [SourceNameEnum.CVA]: [11872, 113, 11569],
                    [SourceNameEnum.CVS]: [315, 2, 67],
                    [SourceNameEnum.GOO]: [11872, 113, 11569],
                    [SourceNameEnum.WIK]: [11872, 113, 11569],
                    [SourceNameEnum.WOD]: [11872, 113, 11569]
                }
            }),
            67: new LocalCountryModel({
                id: 67,
                populationCount: 7522596,
                sources: null
            }),
            68: new LocalCountryModel({
                id: 68,
                populationCount: 65722,
                sourcesData: {
                    [SourceNameEnum.CAC]: [330, 2, 294],
                    [SourceNameEnum.CLN]: [338, 2, 294],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [338, 2, 294],
                    [SourceNameEnum.CVS]: [93, 1, 54],
                    [SourceNameEnum.GOO]: [338, 2, 294],
                    [SourceNameEnum.WIK]: [338, 2, 294],
                    [SourceNameEnum.WOD]: null
                }
            }),
            69: new LocalCountryModel({
                id: 69,
                populationCount: 4866809,
                sourcesData: {
                    [SourceNameEnum.CAC]: [4963, 63, 1924],
                    [SourceNameEnum.CLN]: [4963, 63, 1924],
                    [SourceNameEnum.COA]: [4963, 63, 1924],
                    [SourceNameEnum.CVA]: [4963, 63, 1924],
                    [SourceNameEnum.CVS]: [143, 0, 10],
                    [SourceNameEnum.GOO]: [4963, 63, 4859],
                    [SourceNameEnum.WIK]: [4948, 63, 1924],
                    [SourceNameEnum.WOD]: null
                }
            }),
            70: new LocalCountryModel({
                id: 70,
                populationCount: 171528,
                sources: null
            }),
            71: new LocalCountryModel({
                id: 71,
                populationCount: 16645445,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2077, 104, 1703],
                    [SourceNameEnum.CLN]: [2141, 104, 1704],
                    [SourceNameEnum.COA]: [2141, 104, 1704],
                    [SourceNameEnum.CVA]: [2141, 104, 1704],
                    [SourceNameEnum.CVS]: [399, 46, 83],
                    [SourceNameEnum.GOO]: [2141, 104, 1704],
                    [SourceNameEnum.WIK]: [2113, 104, 1704],
                    [SourceNameEnum.WOD]: null
                }
            }),
            72: new LocalCountryModel({
                id: 72,
                populationCount: 1436981,
                sources: null
            }),
            73: new LocalCountryModel({
                id: 73,
                populationCount: 19183777,
                sourcesData: {
                    [SourceNameEnum.CAC]: [605950, 16499, 575595],
                    [SourceNameEnum.CLN]: [612564, 16660, 579203],
                    [SourceNameEnum.COA]: [612564, 16660, 579203],
                    [SourceNameEnum.CVA]: [612564, 16660, 579203],
                    [SourceNameEnum.CVS]: [37040, 368, 15655],
                    [SourceNameEnum.GOO]: [612564, 16660, 579203],
                    [SourceNameEnum.WIK]: [612564, 16660, 579203],
                    [SourceNameEnum.WOD]: [612564, 16660, 579203]
                }
            }),
            74: new LocalCountryModel({
                id: 74,
                populationCount: 478801,
                sources: null
            }),
            75: new LocalCountryModel({
                id: 75,
                populationCount: 1441783552,
                sourcesData: {
                    [SourceNameEnum.CAC]: [87052, 4634, 82050],
                    [SourceNameEnum.CLN]: [87093, 4634, 82076],
                    [SourceNameEnum.COA]: [96023, 4782, 90031],
                    [SourceNameEnum.CVA]: [87093, 4634, 82076],
                    [SourceNameEnum.CVS]: [82933, 4633, 78209],
                    [SourceNameEnum.GOO]: [87093, 4634, 82077],
                    [SourceNameEnum.WIK]: [87093, 4634, 82076],
                    [SourceNameEnum.WOD]: null
                }
            }),
            76: new LocalCountryModel({
                id: 76,
                populationCount: 1955,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            77: new LocalCountryModel({
                id: 77,
                populationCount: 1231117,
                sources: null
            }),
            78: new LocalCountryModel({
                id: 78,
                populationCount: 0,
                sources: null
            }),
            79: new LocalCountryModel({
                id: 79,
                populationCount: 555,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            80: new LocalCountryModel({
                id: 80,
                populationCount: 51108312,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1626461, 42909, 1497180],
                    [SourceNameEnum.CLN]: [1654880, 43495, 1520548],
                    [SourceNameEnum.COA]: [1654880, 43495, 1520548],
                    [SourceNameEnum.CVA]: [1654880, 43495, 1520548],
                    [SourceNameEnum.CVS]: [13610, 525, 3358],
                    [SourceNameEnum.GOO]: [1654880, 43495, 1520548],
                    [SourceNameEnum.WIK]: [1654880, 43495, 1520548],
                    [SourceNameEnum.WOD]: [1654880, 43495, 1520548]
                }
            }),
            81: new LocalCountryModel({
                id: 81,
                populationCount: 878111,
                sourcesData: {
                    [SourceNameEnum.CAC]: [765, 9, 700],
                    [SourceNameEnum.CLN]: [823, 10, 705],
                    [SourceNameEnum.COA]: [823, 10, 705],
                    [SourceNameEnum.CVA]: [823, 10, 705],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [823, 10, 705],
                    [SourceNameEnum.WIK]: [823, 10, 705],
                    [SourceNameEnum.WOD]: null
                }
            }),
            82: new LocalCountryModel({
                id: 82,
                populationCount: 5580658,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6908, 107, 5831],
                    [SourceNameEnum.CLN]: [7107, 108, 5846],
                    [SourceNameEnum.COA]: [7107, 108, 5846],
                    [SourceNameEnum.CVA]: [7107, 108, 5846],
                    [SourceNameEnum.CVS]: [391, 15, 87],
                    [SourceNameEnum.GOO]: [7107, 108, 5846],
                    [SourceNameEnum.WIK]: [6571, 100, 4988],
                    [SourceNameEnum.WOD]: null
                }
            }),
            83: new LocalCountryModel({
                id: 83,
                populationCount: 90824161,
                sourcesData: {
                    [SourceNameEnum.CAC]: [17376, 584, 14658],
                    [SourceNameEnum.CLN]: [17849, 591, 14701],
                    [SourceNameEnum.COA]: [17849, 591, 14701],
                    [SourceNameEnum.CVA]: [17849, 591, 14701],
                    [SourceNameEnum.CVS]: [1242, 50, 157],
                    [SourceNameEnum.GOO]: [17849, 591, 14701],
                    [SourceNameEnum.WIK]: [17848, 591, 14701],
                    [SourceNameEnum.WOD]: null
                }
            }),
            84: new LocalCountryModel({
                id: 84,
                populationCount: 17564,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            85: new LocalCountryModel({
                id: 85,
                populationCount: 4,
                sources: null
            }),
            86: new LocalCountryModel({
                id: 86,
                populationCount: 330455,
                sources: null
            }),
            87: new LocalCountryModel({
                id: 87,
                populationCount: 5115309,
                sourcesData: {
                    [SourceNameEnum.CAC]: [168114, 2171, 131507],
                    [SourceNameEnum.CLN]: [169321, 2185, 131923],
                    [SourceNameEnum.COA]: [169321, 2185, 131923],
                    [SourceNameEnum.CVA]: [169321, 2185, 131923],
                    [SourceNameEnum.CVS]: [830, 8, 535],
                    [SourceNameEnum.GOO]: [169321, 2185, 131923],
                    [SourceNameEnum.WIK]: [169321, 2185, 131923],
                    [SourceNameEnum.WOD]: null
                }
            }),
            88: new LocalCountryModel({
                id: 88,
                populationCount: 2033700,
                sources: null
            }),
            89: new LocalCountryModel({
                id: 89,
                populationCount: 4094255,
                sourcesData: {
                    [SourceNameEnum.CAC]: [208446, 3860, 196285],
                    [SourceNameEnum.CLN]: [212262, 4016, 201300],
                    [SourceNameEnum.COA]: [212007, 3961, 199820],
                    [SourceNameEnum.CVA]: [212262, 4016, 201300],
                    [SourceNameEnum.CVS]: [2221, 94, 1850],
                    [SourceNameEnum.GOO]: [212262, 4016, 201300],
                    [SourceNameEnum.WIK]: [212262, 4016, 201300],
                    [SourceNameEnum.WOD]: [212262, 4016, 201300]
                }
            }),
            90: new LocalCountryModel({
                id: 90,
                populationCount: 11324113,
                sourcesData: {
                    [SourceNameEnum.CAC]: [11687, 145, 10003],
                    [SourceNameEnum.CLN]: [12056, 146, 10345],
                    [SourceNameEnum.COA]: [12056, 146, 10345],
                    [SourceNameEnum.CVA]: [12056, 146, 10345],
                    [SourceNameEnum.CVS]: [1830, 79, 1383],
                    [SourceNameEnum.GOO]: [12056, 146, 10345],
                    [SourceNameEnum.WIK]: [11863, 146, 10125],
                    [SourceNameEnum.WOD]: null
                }
            }),
            91: new LocalCountryModel({
                id: 91,
                populationCount: 164427,
                sourcesData: {
                    [SourceNameEnum.CAC]: [4230, 14, 2759],
                    [SourceNameEnum.CLN]: [4289, 16, 2950],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [4289, 16, 2950],
                    [SourceNameEnum.CVS]: [16, 1, 14],
                    [SourceNameEnum.GOO]: [4289, 16, 2950],
                    [SourceNameEnum.WIK]: [4260, 14, 2925],
                    [SourceNameEnum.WOD]: null
                }
            }),
            92: new LocalCountryModel({
                id: 92,
                populationCount: 1211197,
                sourcesData: {
                    [SourceNameEnum.CAC]: [22019, 119, 2057],
                    [SourceNameEnum.CLN]: [22818, 127, 2057],
                    [SourceNameEnum.COA]: [22818, 127, 2057],
                    [SourceNameEnum.CVA]: [22818, 127, 2057],
                    [SourceNameEnum.CVS]: [907, 17, 481],
                    [SourceNameEnum.GOO]: [22818, 127, 2057],
                    [SourceNameEnum.WIK]: [22019, 119, 2057],
                    [SourceNameEnum.WOD]: [22818, 127, 2057]
                }
            }),
            93: new LocalCountryModel({
                id: 93,
                populationCount: 10716489,
                sourcesData: {
                    [SourceNameEnum.CAC]: [701622, 11429, 584483],
                    [SourceNameEnum.CLN]: [735469, 11827, 608128],
                    [SourceNameEnum.COA]: [732022, 11711, 600073],
                    [SourceNameEnum.CVA]: [735469, 11827, 608128],
                    [SourceNameEnum.CVS]: [8351, 293, 5241],
                    [SourceNameEnum.GOO]: [735469, 11827, 608128],
                    [SourceNameEnum.WIK]: [735469, 11827, 608128],
                    [SourceNameEnum.WOD]: [735469, 11827, 608128]
                }
            }),
            94: new LocalCountryModel({
                id: 94,
                populationCount: 26679447,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [22563, 138, 21981],
                    [SourceNameEnum.COA]: [22563, 138, 21981],
                    [SourceNameEnum.CVA]: [22563, 138, 21981],
                    [SourceNameEnum.CVS]: [1971, 24, 930],
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [22490, 137, 21934],
                    [SourceNameEnum.WOD]: null
                }
            }),
            95: new LocalCountryModel({
                id: 95,
                populationCount: 3063885,
                sources: null
            }),
            96: new LocalCountryModel({
                id: 96,
                populationCount: 5801880,
                sourcesData: {
                    [SourceNameEnum.CAC]: [161230, 1256, 122954],
                    [SourceNameEnum.CLN]: [165930, 1322, 130818],
                    [SourceNameEnum.COA]: [166567, 1322, 131390],
                    [SourceNameEnum.CVA]: [165930, 1322, 130818],
                    [SourceNameEnum.CVS]: [10713, 537, 8805],
                    [SourceNameEnum.GOO]: [165930, 1322, 130818],
                    [SourceNameEnum.WIK]: [165930, 1322, 130818],
                    [SourceNameEnum.WOD]: [165930, 1322, 130818]
                }
            }),
            97: new LocalCountryModel({
                id: 97,
                populationCount: 4239,
                sources: null
            }),
            98: new LocalCountryModel({
                id: 98,
                populationCount: 994507,
                sourcesData: {
                    [SourceNameEnum.CAC]: [5824, 61, 5723],
                    [SourceNameEnum.CLN]: [5840, 61, 5735],
                    [SourceNameEnum.COA]: [5840, 61, 5735],
                    [SourceNameEnum.CVA]: [5840, 61, 5735],
                    [SourceNameEnum.CVS]: [1284, 3, 905],
                    [SourceNameEnum.GOO]: [5840, 61, 5735],
                    [SourceNameEnum.WIK]: [5789, 61, 5681],
                    [SourceNameEnum.WOD]: null
                }
            }),
            99: new LocalCountryModel({
                id: 99,
                populationCount: 71986,
                sourcesData: {
                    [SourceNameEnum.CAC]: [88, 0, 83],
                    [SourceNameEnum.CLN]: [88, 0, 83],
                    [SourceNameEnum.COA]: [88, 0, 83],
                    [SourceNameEnum.CVA]: [88, 0, 83],
                    [SourceNameEnum.CVS]: [16, 0, 15],
                    [SourceNameEnum.GOO]: [96, 0, 83],
                    [SourceNameEnum.WIK]: [96, 0, 87],
                    [SourceNameEnum.WOD]: null
                }
            }),
            100: new LocalCountryModel({
                id: 100,
                populationCount: 10897132,
                sourcesData: {
                    [SourceNameEnum.CAC]: [169579, 2409, 130264],
                    [SourceNameEnum.CLN]: [172218, 2416, 131543],
                    [SourceNameEnum.COA]: [172218, 2416, 131543],
                    [SourceNameEnum.CVA]: [172218, 2416, 131543],
                    [SourceNameEnum.CVS]: [11320, 422, 3351],
                    [SourceNameEnum.GOO]: [172218, 2416, 131543],
                    [SourceNameEnum.WIK]: [172218, 2416, 131543],
                    [SourceNameEnum.WOD]: [172218, 2416, 131543]
                }
            }),
            101: new LocalCountryModel({
                id: 101,
                populationCount: 2302444,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [13703, 1241, 8018],
                    [SourceNameEnum.WOD]: null
                }
            }),
            102: new LocalCountryModel({
                id: 102,
                populationCount: 7750,
                sources: null
            }),
            103: new LocalCountryModel({
                id: 103,
                populationCount: 17761521,
                sourcesData: {
                    [SourceNameEnum.CAC]: [211512, 14023, 184507],
                    [SourceNameEnum.CLN]: [213378, 14051, 184507],
                    [SourceNameEnum.COA]: [213378, 14051, 184507],
                    [SourceNameEnum.CVA]: [213378, 14051, 184507],
                    [SourceNameEnum.CVS]: [30502, 2338, 3433],
                    [SourceNameEnum.GOO]: [213378, 14051, 184507],
                    [SourceNameEnum.WIK]: [213378, 14051, 184507],
                    [SourceNameEnum.WOD]: [213378, 14051, 184507]
                }
            }),
            104: new LocalCountryModel({
                id: 104,
                populationCount: 103220070,
                sourcesData: {
                    [SourceNameEnum.CAC]: [136644, 7576, 111451],
                    [SourceNameEnum.CLN]: [139471, 7687, 112826],
                    [SourceNameEnum.COA]: [139471, 7687, 112826],
                    [SourceNameEnum.CVA]: [139471, 7687, 112826],
                    [SourceNameEnum.CVS]: [10829, 571, 2626],
                    [SourceNameEnum.GOO]: [139471, 7687, 112826],
                    [SourceNameEnum.WIK]: [139471, 7687, 112826],
                    [SourceNameEnum.WOD]: null
                }
            }),
            105: new LocalCountryModel({
                id: 105,
                populationCount: 6500721,
                sourcesData: {
                    [SourceNameEnum.CAC]: [45960, 1327, 41112],
                    [SourceNameEnum.CLN]: [46242, 1351, 41338],
                    [SourceNameEnum.COA]: [45960, 1327, 45960],
                    [SourceNameEnum.CVA]: [46242, 1351, 41338],
                    [SourceNameEnum.CVS]: [1112, 23, 405],
                    [SourceNameEnum.GOO]: [46242, 1351, 41338],
                    [SourceNameEnum.WIK]: [45960, 1343, 41112],
                    [SourceNameEnum.WOD]: [46242, 1351, 41338]
                }
            }),
            106: new LocalCountryModel({
                id: 106,
                populationCount: 56286961,
                sources: null
            }),
            107: new LocalCountryModel({
                id: 107,
                populationCount: 1424342,
                sourcesData: {
                    [SourceNameEnum.CAC]: [5264, 86, 5123],
                    [SourceNameEnum.CLN]: [5277, 86, 5136],
                    [SourceNameEnum.COA]: [5277, 86, 5136],
                    [SourceNameEnum.CVA]: [5277, 86, 5136],
                    [SourceNameEnum.CVS]: [583, 7, 13],
                    [SourceNameEnum.GOO]: [5277, 86, 5136],
                    [SourceNameEnum.WIK]: [5277, 86, 5136],
                    [SourceNameEnum.WOD]: null
                }
            }),
            108: new LocalCountryModel({
                id: 108,
                populationCount: 3569280,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1252, 1, 643],
                    [SourceNameEnum.CLN]: [1320, 3, 767],
                    [SourceNameEnum.COA]: [1252, 1, 643],
                    [SourceNameEnum.CVA]: [1320, 3, 767],
                    [SourceNameEnum.CVS]: [39, 0, 38],
                    [SourceNameEnum.GOO]: [1320, 3, 767],
                    [SourceNameEnum.WIK]: [1320, 3, 767],
                    [SourceNameEnum.WOD]: null
                }
            }),
            109: new LocalCountryModel({
                id: 109,
                populationCount: 1326368,
                sourcesData: {
                    [SourceNameEnum.CAC]: [27256, 226, 17664],
                    [SourceNameEnum.CLN]: [28789, 241, 19205],
                    [SourceNameEnum.COA]: [28406, 234, 19027],
                    [SourceNameEnum.CVA]: [28789, 241, 19205],
                    [SourceNameEnum.CVS]: [1758, 62, 909],
                    [SourceNameEnum.GOO]: [28789, 241, 19205],
                    [SourceNameEnum.WIK]: [28789, 241, 19205],
                    [SourceNameEnum.WOD]: [28789, 241, 19205]
                }
            }),
            110: new LocalCountryModel({
                id: 110,
                populationCount: 1165503,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [9482, 216, 7073],
                    [SourceNameEnum.COA]: [9482, 216, 7073],
                    [SourceNameEnum.CVA]: [9482, 216, 7073],
                    [SourceNameEnum.CVS]: [187, 2, 51],
                    [SourceNameEnum.GOO]: [9482, 216, 7073],
                    [SourceNameEnum.WIK]: [9482, 216, 7073],
                    [SourceNameEnum.WOD]: null
                }
            }),
            111: new LocalCountryModel({
                id: 111,
                populationCount: 116278739,
                sourcesData: {
                    [SourceNameEnum.CAC]: [123856, 1918, 111870],
                    [SourceNameEnum.CLN]: [124652, 1937, 112251],
                    [SourceNameEnum.COA]: [124652, 1937, 112251],
                    [SourceNameEnum.CVA]: [124652, 1937, 112251],
                    [SourceNameEnum.CVS]: [272, 5, 108],
                    [SourceNameEnum.GOO]: [124652, 1937, 112251],
                    [SourceNameEnum.WIK]: [124652, 1937, 112251],
                    [SourceNameEnum.WOD]: null
                }
            }),
            112: new LocalCountryModel({
                id: 112,
                populationCount: 3480,
                sourcesData: {
                    [SourceNameEnum.CAC]: [29, 0, 17],
                    [SourceNameEnum.CLN]: [29, 0, 17],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [29, 0, 17],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [29, 0, 17],
                    [SourceNameEnum.WIK]: [29, 0, 17],
                    [SourceNameEnum.WOD]: null
                }
            }),
            113: new LocalCountryModel({
                id: 113,
                populationCount: 48863,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [610, 0, 551],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [610, 0, 551],
                    [SourceNameEnum.CVS]: [187, 0, 187],
                    [SourceNameEnum.GOO]: [610, 0, 551],
                    [SourceNameEnum.WIK]: [610, 0, 551],
                    [SourceNameEnum.WOD]: null
                }
            }),
            114: new LocalCountryModel({
                id: 114,
                populationCount: 899282,
                sourcesData: {
                    [SourceNameEnum.CAC]: [49, 2, 44],
                    [SourceNameEnum.CLN]: [49, 2, 44],
                    [SourceNameEnum.COA]: [49, 2, 44],
                    [SourceNameEnum.CVA]: [49, 2, 44],
                    [SourceNameEnum.CVS]: [18, 0, 14],
                    [SourceNameEnum.GOO]: [49, 2, 44],
                    [SourceNameEnum.WIK]: [49, 2, 44],
                    [SourceNameEnum.WOD]: null
                }
            }),
            115: new LocalCountryModel({
                id: 115,
                populationCount: 5545058,
                sourcesData: {
                    [SourceNameEnum.CAC]: [35858, 556, 29000],
                    [SourceNameEnum.CLN]: [36604, 561, 29000],
                    [SourceNameEnum.COA]: [36403, 561, 29000],
                    [SourceNameEnum.CVA]: [36604, 561, 29000],
                    [SourceNameEnum.CVS]: [6145, 287, 4300],
                    [SourceNameEnum.GOO]: [36604, 561, 29000],
                    [SourceNameEnum.WIK]: [36604, 561, 26000],
                    [SourceNameEnum.WOD]: [36604, 561, 29000]
                }
            }),
            116: new LocalCountryModel({
                id: 116,
                populationCount: 6589069,
                sources: null
            }),
            117: new LocalCountryModel({
                id: 117,
                populationCount: 65346760,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2600498, 64381, 193045],
                    [SourceNameEnum.CLN]: [2639773, 64765, 194221],
                    [SourceNameEnum.COA]: [2697014, 64892, 200822],
                    [SourceNameEnum.CVA]: [2639773, 64765, 194221],
                    [SourceNameEnum.CVS]: [178870, 27425, 59605],
                    [SourceNameEnum.GOO]: [2639773, 64765, 194221],
                    [SourceNameEnum.WIK]: [2639773, 64765, 194221],
                    [SourceNameEnum.WOD]: [2639773, 64765, 194221]
                }
            }),
            118: new LocalCountryModel({
                id: 118,
                populationCount: 302186,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13045, 71, 9995],
                    [SourceNameEnum.CLN]: [13273, 71, 9995],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [13273, 71, 9995],
                    [SourceNameEnum.CVS]: [164, 1, 124],
                    [SourceNameEnum.GOO]: [13273, 71, 9995],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: [13273, 71, 9995]
                }
            }),
            119: new LocalCountryModel({
                id: 119,
                populationCount: 281742,
                sourcesData: {
                    [SourceNameEnum.CAC]: [16851, 114, 4842],
                    [SourceNameEnum.CLN]: [16926, 114, 4842],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [16926, 114, 4842],
                    [SourceNameEnum.CVS]: [60, 0, 59],
                    [SourceNameEnum.GOO]: [16926, 114, 4842],
                    [SourceNameEnum.WIK]: [16926, 114, 5167],
                    [SourceNameEnum.WOD]: null
                }
            }),
            120: new LocalCountryModel({
                id: 120,
                populationCount: 400,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            121: new LocalCountryModel({
                id: 121,
                populationCount: 1216524,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            122: new LocalCountryModel({
                id: 122,
                populationCount: 2250595,
                sourcesData: {
                    [SourceNameEnum.CAC]: [9571, 64, 9388],
                    [SourceNameEnum.CLN]: [9571, 64, 9388],
                    [SourceNameEnum.COA]: [9571, 64, 9388],
                    [SourceNameEnum.CVA]: [9571, 64, 9388],
                    [SourceNameEnum.CVS]: [1104, 10, 182],
                    [SourceNameEnum.GOO]: [9571, 64, 9388],
                    [SourceNameEnum.WIK]: [9510, 64, 9356],
                    [SourceNameEnum.WOD]: null
                }
            }),
            123: new LocalCountryModel({
                id: 123,
                populationCount: 134535,
                sources: null
            }),
            124: new LocalCountryModel({
                id: 124,
                populationCount: 2701743,
                sources: null
            }),
            125: new LocalCountryModel({
                id: 125,
                populationCount: 390407,
                sources: null
            }),
            126: new LocalCountryModel({
                id: 126,
                populationCount: 2448204,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3797, 124, 3664],
                    [SourceNameEnum.CLN]: [3800, 124, 3669],
                    [SourceNameEnum.COA]: [3800, 124, 3669],
                    [SourceNameEnum.CVA]: [3800, 124, 3669],
                    [SourceNameEnum.CVS]: [23, 1, 10],
                    [SourceNameEnum.GOO]: [3800, 124, 3669],
                    [SourceNameEnum.WIK]: [3797, 124, 3668],
                    [SourceNameEnum.WOD]: null
                }
            }),
            127: new LocalCountryModel({
                id: 127,
                populationCount: 1850000,
                sources: null
            }),
            128: new LocalCountryModel({
                id: 128,
                populationCount: 3984996,
                sourcesData: {
                    [SourceNameEnum.CAC]: [225893, 2481, 210445],
                    [SourceNameEnum.CLN]: [228752, 2572, 217973],
                    [SourceNameEnum.COA]: [228410, 2528, 214992],
                    [SourceNameEnum.CVA]: [228752, 2572, 217973],
                    [SourceNameEnum.CVS]: [667, 12, 383],
                    [SourceNameEnum.GOO]: [228752, 2572, 217973],
                    [SourceNameEnum.WIK]: [228410, 2528, 214992],
                    [SourceNameEnum.WOD]: null
                }
            }),
            129: new LocalCountryModel({
                id: 129,
                populationCount: 83883554,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1710992, 33172, 1302600],
                    [SourceNameEnum.CLN]: [1762525, 34519, 1368100],
                    [SourceNameEnum.COA]: [1762637, 34145, 1388744],
                    [SourceNameEnum.CVA]: [1762525, 34519, 1368100],
                    [SourceNameEnum.CVS]: [174975, 7928, 150300],
                    [SourceNameEnum.GOO]: [1763860, 34720, 1428843],
                    [SourceNameEnum.WIK]: [1755937, 34388, 1350634],
                    [SourceNameEnum.WOD]: [1762504, 34388, 1368100]
                }
            }),
            130: new LocalCountryModel({
                id: 130,
                populationCount: 31371610,
                sourcesData: {
                    [SourceNameEnum.CAC]: [54771, 335, 53594],
                    [SourceNameEnum.CLN]: [54930, 335, 53758],
                    [SourceNameEnum.COA]: [54930, 335, 53758],
                    [SourceNameEnum.CVA]: [54930, 335, 53758],
                    [SourceNameEnum.CVS]: [5530, 24, 674],
                    [SourceNameEnum.GOO]: [54930, 335, 53758],
                    [SourceNameEnum.WIK]: [54930, 335, 53758],
                    [SourceNameEnum.WOD]: null
                }
            }),
            131: new LocalCountryModel({
                id: 131,
                populationCount: 33691,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1973, 6, 1216],
                    [SourceNameEnum.CLN]: [2212, 7, 1249],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [2212, 7, 1249],
                    [SourceNameEnum.CVS]: [147, 0, 144],
                    [SourceNameEnum.GOO]: [2304, 7, 1274],
                    [SourceNameEnum.WIK]: [2212, 6, 1249],
                    [SourceNameEnum.WOD]: null
                }
            }),
            132: new LocalCountryModel({
                id: 132,
                populationCount: 1249000,
                sources: null
            }),
            133: new LocalCountryModel({
                id: 133,
                populationCount: 226900,
                sources: null
            }),
            134: new LocalCountryModel({
                id: 134,
                populationCount: 10400362,
                sourcesData: {
                    [SourceNameEnum.CAC]: [137918, 4788, 9989],
                    [SourceNameEnum.CLN]: [139447, 4881, 9989],
                    [SourceNameEnum.COA]: [139447, 4881, 93764],
                    [SourceNameEnum.CVA]: [139447, 4881, 9989],
                    [SourceNameEnum.CVS]: [2770, 156, 1374],
                    [SourceNameEnum.GOO]: [139447, 4881, 9989],
                    [SourceNameEnum.WIK]: [139447, 4881, null],
                    [SourceNameEnum.WOD]: [139447, 4881, 9989]
                }
            }),
            135: new LocalCountryModel({
                id: 135,
                populationCount: 56770,
                sourcesData: {
                    [SourceNameEnum.CAC]: [27, 0, 20],
                    [SourceNameEnum.CLN]: [27, 0, 21],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [27, 0, 21],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [27, 0, 21],
                    [SourceNameEnum.WIK]: [27, 0, 21],
                    [SourceNameEnum.WOD]: null
                }
            }),
            136: new LocalCountryModel({
                id: 136,
                populationCount: 112690,
                sourcesData: {
                    [SourceNameEnum.CAC]: [127, 0, 107],
                    [SourceNameEnum.CLN]: [127, 0, 107],
                    [SourceNameEnum.COA]: [127, 0, 107],
                    [SourceNameEnum.CVA]: [127, 0, 107],
                    [SourceNameEnum.CVS]: [21, 0, 14],
                    [SourceNameEnum.GOO]: [134, 0, 107],
                    [SourceNameEnum.WIK]: [103, 0, 49],
                    [SourceNameEnum.WOD]: null
                }
            }),
            137: new LocalCountryModel({
                id: 137,
                populationCount: 400124,
                sourcesData: {
                    [SourceNameEnum.CAC]: [8660, 154, 2242],
                    [SourceNameEnum.CLN]: [8660, 154, 2242],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [8660, 154, 2242],
                    [SourceNameEnum.CVS]: [155, 13, 109],
                    [SourceNameEnum.GOO]: [8660, 155, 2242],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: [8660, 154, 2242]
                }
            }),
            138: new LocalCountryModel({
                id: 138,
                populationCount: 169609,
                sourcesData: {
                    [SourceNameEnum.CAC]: [32, 1, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: [32, 1, 0],
                    [SourceNameEnum.GOO]: [7326, 122, 7047],
                    [SourceNameEnum.WIK]: [7257, 121, 6707],
                    [SourceNameEnum.WOD]: null
                }
            }),
            139: new LocalCountryModel({
                id: 139,
                populationCount: 48380000,
                sources: null
            }),
            140: new LocalCountryModel({
                id: 140,
                populationCount: 18067573,
                sourcesData: {
                    [SourceNameEnum.CAC]: [137166, 4803, 125630],
                    [SourceNameEnum.CLN]: [138236, 4820, 126606],
                    [SourceNameEnum.COA]: [138236, 4820, 126606],
                    [SourceNameEnum.CVA]: [138236, 4820, 126606],
                    [SourceNameEnum.CVS]: [1518, 29, 129],
                    [SourceNameEnum.GOO]: [138236, 4820, 126606],
                    [SourceNameEnum.WIK]: [138236, 4820, 126606],
                    [SourceNameEnum.WOD]: [138236, 4820, 126606]
                }
            }),
            141: new LocalCountryModel({
                id: 141,
                populationCount: 63021,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [299, 13, 279],
                    [SourceNameEnum.WOD]: null
                }
            }),
            142: new LocalCountryModel({
                id: 142,
                populationCount: 13294311,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13707, 80, 13117],
                    [SourceNameEnum.CLN]: [13738, 81, 13153],
                    [SourceNameEnum.COA]: [13738, 81, 13153],
                    [SourceNameEnum.CVA]: [13738, 81, 13153],
                    [SourceNameEnum.CVS]: [2473, 15, 895],
                    [SourceNameEnum.GOO]: [13738, 81, 13153],
                    [SourceNameEnum.WIK]: [13630, 80, 13039],
                    [SourceNameEnum.WOD]: null
                }
            }),
            143: new LocalCountryModel({
                id: 143,
                populationCount: 1989525,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2452, 45, 2397],
                    [SourceNameEnum.CLN]: [2452, 45, 2397],
                    [SourceNameEnum.COA]: [2452, 45, 2397],
                    [SourceNameEnum.CVA]: [2452, 45, 2397],
                    [SourceNameEnum.CVS]: [913, 3, 26],
                    [SourceNameEnum.GOO]: [2452, 45, 2397],
                    [SourceNameEnum.WIK]: [2447, 44, 2337],
                    [SourceNameEnum.WOD]: null
                }
            }),
            144: new LocalCountryModel({
                id: 144,
                populationCount: 788387,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6319, 164, 5809],
                    [SourceNameEnum.CLN]: [6348, 164, 5868],
                    [SourceNameEnum.COA]: [6348, 164, 5868],
                    [SourceNameEnum.CVA]: [6348, 164, 5868],
                    [SourceNameEnum.CVS]: [113, 10, 42],
                    [SourceNameEnum.GOO]: [6348, 164, 5868],
                    [SourceNameEnum.WIK]: [6332, 164, 5820],
                    [SourceNameEnum.WOD]: [6348, 164, 5868]
                }
            }),
            145: new LocalCountryModel({
                id: 145,
                populationCount: 11466267,
                sourcesData: {
                    [SourceNameEnum.CAC]: [9999, 236, 8598],
                    [SourceNameEnum.CLN]: [10015, 236, 8624],
                    [SourceNameEnum.COA]: [10015, 236, 8624],
                    [SourceNameEnum.CVA]: [10015, 236, 8624],
                    [SourceNameEnum.CVS]: [273, 20, 18],
                    [SourceNameEnum.GOO]: [10015, 236, 8624],
                    [SourceNameEnum.WIK]: [10077, 236, 8657],
                    [SourceNameEnum.WOD]: null
                }
            }),
            146: new LocalCountryModel({
                id: 146,
                populationCount: 0,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            147: new LocalCountryModel({
                id: 147,
                populationCount: 1771636,
                sources: null
            }),
            148: new LocalCountryModel({
                id: 148,
                populationCount: 9976855,
                sourcesData: {
                    [SourceNameEnum.CAC]: [120912, 3111, 56580],
                    [SourceNameEnum.CLN]: [122974, 3160, 56936],
                    [SourceNameEnum.COA]: [122974, 3160, 56936],
                    [SourceNameEnum.CVA]: [122974, 3160, 56936],
                    [SourceNameEnum.CVS]: [2255, 123, 237],
                    [SourceNameEnum.GOO]: [122974, 3160, 56936],
                    [SourceNameEnum.WIK]: [122974, 3160, 56936],
                    [SourceNameEnum.WOD]: [122974, 3160, 56936]
                }
            }),
            149: new LocalCountryModel({
                id: 149,
                populationCount: 7523511,
                sourcesData: {
                    [SourceNameEnum.CAC]: [8779, 147, 7722],
                    [SourceNameEnum.CLN]: [8924, 150, 7968],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [8924, 150, 7968],
                    [SourceNameEnum.CVS]: [1052, 4, 1009],
                    [SourceNameEnum.GOO]: [8924, 150, 7968],
                    [SourceNameEnum.WIK]: [8924, 150, 7968],
                    [SourceNameEnum.WOD]: null
                }
            }),
            150: new LocalCountryModel({
                id: 150,
                populationCount: 0,
                sources: null
            }),
            151: new LocalCountryModel({
                id: 151,
                populationCount: 9648504,
                sourcesData: {
                    [SourceNameEnum.CAC]: [319543, 9429, 144234],
                    [SourceNameEnum.CLN]: [326688, 9781, 164403],
                    [SourceNameEnum.COA]: [325278, 9667, 157063],
                    [SourceNameEnum.CVA]: [326688, 9781, 164403],
                    [SourceNameEnum.CVS]: [3380, 436, 1169],
                    [SourceNameEnum.GOO]: [326688, 9781, 164403],
                    [SourceNameEnum.WIK]: [326688, 9781, 164403],
                    [SourceNameEnum.WOD]: [326688, 9781, 164403]
                }
            }),
            152: new LocalCountryModel({
                id: 152,
                populationCount: 342244,
                sourcesData: {
                    [SourceNameEnum.CAC]: [5754, 29, 5578],
                    [SourceNameEnum.CLN]: [5754, 29, 5578],
                    [SourceNameEnum.COA]: [5754, 29, 5578],
                    [SourceNameEnum.CVA]: [5754, 29, 5578],
                    [SourceNameEnum.CVS]: [1802, 10, 1780],
                    [SourceNameEnum.GOO]: [5754, 29, 5578],
                    [SourceNameEnum.WIK]: [5754, 29, 5578],
                    [SourceNameEnum.WOD]: [5754, 29, 5578]
                }
            }),
            153: new LocalCountryModel({
                id: 153,
                populationCount: 1386210388,
                sourcesData: {
                    [SourceNameEnum.CAC]: [10267283, 148774, 9859762],
                    [SourceNameEnum.CLN]: [10305788, 149218, 9906387],
                    [SourceNameEnum.COA]: [10286709, 148994, 9883461],
                    [SourceNameEnum.CVA]: [10305788, 149218, 9906387],
                    [SourceNameEnum.CVS]: [81997, 2649, 27969],
                    [SourceNameEnum.GOO]: [10307034, 149261, 9906387],
                    [SourceNameEnum.WIK]: [10286709, 148994, 9883461],
                    [SourceNameEnum.WOD]: [10305788, 149218, 9906387]
                }
            }),
            154: new LocalCountryModel({
                id: 154,
                populationCount: 173667,
                sources: null
            }),
            155: new LocalCountryModel({
                id: 155,
                populationCount: 274849611,
                sourcesData: {
                    [SourceNameEnum.CAC]: [735124, 21944, 603741],
                    [SourceNameEnum.CLN]: [758473, 22555, 625518],
                    [SourceNameEnum.COA]: [751270, 22329, 617936],
                    [SourceNameEnum.CVA]: [758473, 22555, 625518],
                    [SourceNameEnum.CVS]: [16006, 1043, 3518],
                    [SourceNameEnum.GOO]: [758473, 22555, 625518],
                    [SourceNameEnum.WIK]: [758473, 22555, 625518],
                    [SourceNameEnum.WOD]: [758473, 22555, 625518]
                }
            }),
            156: new LocalCountryModel({
                id: 156,
                populationCount: 488043,
                sources: null
            }),
            157: new LocalCountryModel({
                id: 157,
                populationCount: 25050000,
                sources: null
            }),
            158: new LocalCountryModel({
                id: 158,
                populationCount: 84469320,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1218753, 55095, 978714],
                    [SourceNameEnum.CLN]: [1231429, 55337, 995570],
                    [SourceNameEnum.COA]: [1231429, 55337, 995570],
                    [SourceNameEnum.CVA]: [1231429, 55337, 995570],
                    [SourceNameEnum.CVS]: [114533, 6854, 90539],
                    [SourceNameEnum.GOO]: [1231429, 55337, 995570],
                    [SourceNameEnum.WIK]: [1231429, 55337, 995570],
                    [SourceNameEnum.WOD]: [1231429, 55337, 995570]
                }
            }),
            159: new LocalCountryModel({
                id: 159,
                populationCount: 40658986,
                sourcesData: {
                    [SourceNameEnum.CAC]: [594442, 12808, 536348],
                    [SourceNameEnum.CLN]: [596193, 12824, 539817],
                    [SourceNameEnum.COA]: [596193, 12824, 539817],
                    [SourceNameEnum.CVA]: [596193, 12824, 539817],
                    [SourceNameEnum.CVS]: [3143, 115, 2028],
                    [SourceNameEnum.GOO]: [596193, 12824, 539817],
                    [SourceNameEnum.WIK]: [596193, 12824, 539817],
                    [SourceNameEnum.WOD]: [596193, 12824, 539817]
                }
            }),
            160: new LocalCountryModel({
                id: 160,
                populationCount: 4959811,
                sourcesData: {
                    [SourceNameEnum.CAC]: [90157, 2226, 23364],
                    [SourceNameEnum.CLN]: [93532, 2248, 23364],
                    [SourceNameEnum.COA]: [93532, 2248, 23364],
                    [SourceNameEnum.CVA]: [93532, 2248, 23364],
                    [SourceNameEnum.CVS]: [23827, 1506, 19470],
                    [SourceNameEnum.GOO]: [93532, 2248, 23364],
                    [SourceNameEnum.WIK]: [93532, 2248, 24000],
                    [SourceNameEnum.WOD]: [93532, 2248, 23364]
                }
            }),
            161: new LocalCountryModel({
                id: 161,
                populationCount: 85033,
                sourcesData: {
                    [SourceNameEnum.CAC]: [377, 25, 348],
                    [SourceNameEnum.CLN]: [377, 25, 348],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [377, 25, 348],
                    [SourceNameEnum.CVS]: [332, 23, 285],
                    [SourceNameEnum.GOO]: [377, 25, 348],
                    [SourceNameEnum.WIK]: [377, 25, 345],
                    [SourceNameEnum.WOD]: null
                }
            }),
            162: new LocalCountryModel({
                id: 162,
                populationCount: 8716938,
                sourcesData: {
                    [SourceNameEnum.CAC]: [416584, 3307, 372284],
                    [SourceNameEnum.CLN]: [428510, 3356, 379911],
                    [SourceNameEnum.COA]: [428510, 3356, 379910],
                    [SourceNameEnum.CVA]: [428510, 3356, 379911],
                    [SourceNameEnum.CVS]: [16579, 265, 12521],
                    [SourceNameEnum.GOO]: [428510, 3356, 379911],
                    [SourceNameEnum.WIK]: [428510, 3356, 379911],
                    [SourceNameEnum.WOD]: [428510, 3356, 379911]
                }
            }),
            163: new LocalCountryModel({
                id: 163,
                displayName: 'Italy',
                populationCount: 60433961,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2083689, 73604, 1445690],
                    [SourceNameEnum.CLN]: [2129376, 74621, 1479988],
                    [SourceNameEnum.COA]: [2129376, 74621, 1479988],
                    [SourceNameEnum.CVA]: [2129376, 74621, 1479988],
                    [SourceNameEnum.CVS]: [223096, 31368, 115288],
                    [SourceNameEnum.GOO]: [2129376, 74621, 1479988],
                    [SourceNameEnum.WIK]: [2129376, 74621, 1479988],
                    [SourceNameEnum.WOD]: [2129376, 74621, 1479988]
                }
            }),
            164: new LocalCountryModel({
                id: 164,
                populationCount: 2966840,
                sourcesData: {
                    [SourceNameEnum.CAC]: [12793, 302, 10319],
                    [SourceNameEnum.CLN]: [12915, 303, 10532],
                    [SourceNameEnum.COA]: [12915, 303, 10532],
                    [SourceNameEnum.CVA]: [12915, 303, 10532],
                    [SourceNameEnum.CVS]: [509, 9, 118],
                    [SourceNameEnum.GOO]: [12915, 303, 10532],
                    [SourceNameEnum.WIK]: [12750, 298, 10252],
                    [SourceNameEnum.WOD]: null
                }
            }),
            165: new LocalCountryModel({
                id: 165,
                populationCount: 9944283,
                sources: null
            }),
            166: new LocalCountryModel({
                id: 166,
                populationCount: 126302264,
                sourcesData: {
                    [SourceNameEnum.CAC]: [226596, 3349, 189466],
                    [SourceNameEnum.CLN]: [234395, 3460, 193714],
                    [SourceNameEnum.COA]: [239068, 3342, 193558],
                    [SourceNameEnum.CVA]: [234395, 3460, 193714],
                    [SourceNameEnum.CVS]: [16120, 697, 9868],
                    [SourceNameEnum.GOO]: [242042, 3563, 196420],
                    [SourceNameEnum.WIK]: [238012, 3514, 196420],
                    [SourceNameEnum.WOD]: null
                }
            }),
            167: new LocalCountryModel({
                id: 167,
                populationCount: 0,
                sources: null
            }),
            168: new LocalCountryModel({
                id: 168,
                populationCount: 692032,
                sources: null
            }),
            169: new LocalCountryModel({
                id: 169,
                populationCount: 107800,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [3059, 60, 2445],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [3059, 60, 2445],
                    [SourceNameEnum.CVS]: [549, 43, 456],
                    [SourceNameEnum.GOO]: [3059, 60, 2445],
                    [SourceNameEnum.WIK]: [2726, 42, 1978],
                    [SourceNameEnum.WOD]: null
                }
            }),
            170: new LocalCountryModel({
                id: 170,
                populationCount: 162014,
                sources: null
            }),
            171: new LocalCountryModel({
                id: 171,
                populationCount: 0,
                sources: null
            }),
            172: new LocalCountryModel({
                id: 172,
                populationCount: 10259364,
                sourcesData: {
                    [SourceNameEnum.CAC]: [293067, 3815, 268843],
                    [SourceNameEnum.CLN]: [295765, 3851, 271834],
                    [SourceNameEnum.COA]: [295765, 3851, 271834],
                    [SourceNameEnum.CVA]: [295765, 3851, 271834],
                    [SourceNameEnum.CVS]: [586, 9, 393],
                    [SourceNameEnum.GOO]: [295765, 3851, 271834],
                    [SourceNameEnum.WIK]: [295765, 3851, 271834],
                    [SourceNameEnum.WOD]: null
                }
            }),
            173: new LocalCountryModel({
                id: 173,
                populationCount: 1360633,
                sources: null
            }),
            174: new LocalCountryModel({
                id: 174,
                populationCount: 865828,
                sources: null
            }),
            175: new LocalCountryModel({
                id: 175,
                populationCount: 1689441,
                sources: null
            }),
            176: new LocalCountryModel({
                id: 176,
                populationCount: 275413,
                sources: null
            }),
            177: new LocalCountryModel({
                id: 177,
                populationCount: 466305,
                sources: null
            }),
            178: new LocalCountryModel({
                id: 178,
                populationCount: 1817500,
                sources: null
            }),
            179: new LocalCountryModel({
                id: 179,
                populationCount: 622484,
                sources: null
            }),
            180: new LocalCountryModel({
                id: 180,
                populationCount: 286627,
                sources: null
            }),
            181: new LocalCountryModel({
                id: 181,
                populationCount: 1574079,
                sources: null
            }),
            182: new LocalCountryModel({
                id: 182,
                populationCount: 18879656,
                sourcesData: {
                    [SourceNameEnum.CAC]: [153925, 2262, 141731],
                    [SourceNameEnum.CLN]: [156220, 2262, 143607],
                    [SourceNameEnum.COA]: [202060, 2765, 176774],
                    [SourceNameEnum.CVA]: [156220, 2262, 143607],
                    [SourceNameEnum.CVS]: [5571, 32, 2531],
                    [SourceNameEnum.GOO]: [202159, 2767, 176842],
                    [SourceNameEnum.WIK]: [155473, 2262, 143075],
                    [SourceNameEnum.WOD]: [156220, 2262, 143607]
                }
            }),
            183: new LocalCountryModel({
                id: 183,
                populationCount: 54321417,
                sourcesData: {
                    [SourceNameEnum.CAC]: [96251, 1667, 78475],
                    [SourceNameEnum.CLN]: [96614, 1681, 78802],
                    [SourceNameEnum.COA]: [96614, 1681, 78802],
                    [SourceNameEnum.CVA]: [96614, 1681, 78802],
                    [SourceNameEnum.CVS]: [758, 42, 284],
                    [SourceNameEnum.GOO]: [96614, 1681, 78802],
                    [SourceNameEnum.WIK]: [96614, 1681, 78802],
                    [SourceNameEnum.WOD]: null
                }
            }),
            184: new LocalCountryModel({
                id: 184,
                populationCount: 537513,
                sources: null
            }),
            185: new LocalCountryModel({
                id: 185,
                populationCount: 0,
                sources: null
            }),
            186: new LocalCountryModel({
                id: 186,
                populationCount: 120283,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            187: new LocalCountryModel({
                id: 187,
                populationCount: 840873,
                sources: null
            }),
            188: new LocalCountryModel({
                id: 188,
                populationCount: 5678245,
                sources: null
            }),
            189: new LocalCountryModel({
                id: 189,
                populationCount: 1782115,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: [51502, 1336, 41854],
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [51285, 1325, 39134],
                    [SourceNameEnum.WIK]: [50405, 1305, 39134],
                    [SourceNameEnum.WOD]: null
                }
            }),
            190: new LocalCountryModel({
                id: 190,
                populationCount: 5122747,
                sources: null
            }),
            191: new LocalCountryModel({
                id: 191,
                populationCount: 4303275,
                sourcesData: {
                    [SourceNameEnum.CAC]: [150298, 933, 146284],
                    [SourceNameEnum.CLN]: [150869, 936, 146777],
                    [SourceNameEnum.COA]: [150869, 936, 146777],
                    [SourceNameEnum.CVA]: [150869, 936, 146777],
                    [SourceNameEnum.CVS]: [11975, 88, 3451],
                    [SourceNameEnum.GOO]: [150869, 936, 146777],
                    [SourceNameEnum.WIK]: [150869, 936, 146777],
                    [SourceNameEnum.WOD]: [150869, 936, 146777]
                }
            }),
            192: new LocalCountryModel({
                id: 192,
                populationCount: 6572917,
                sourcesData: {
                    [SourceNameEnum.CAC]: [80843, 1354, 75624],
                    [SourceNameEnum.CLN]: [81214, 1358, 76351],
                    [SourceNameEnum.COA]: [81156, 1356, 76148],
                    [SourceNameEnum.CVA]: [81214, 1358, 76351],
                    [SourceNameEnum.CVS]: [1082, 12, 735],
                    [SourceNameEnum.GOO]: [81214, 1358, 76351],
                    [SourceNameEnum.WIK]: [81156, 1356, 76148],
                    [SourceNameEnum.WOD]: [81214, 1358, 76351]
                }
            }),
            193: new LocalCountryModel({
                id: 193,
                populationCount: 7323114,
                sourcesData: {
                    [SourceNameEnum.CAC]: [41, 0, 40],
                    [SourceNameEnum.CLN]: [41, 0, 40],
                    [SourceNameEnum.COA]: [41, 0, 40],
                    [SourceNameEnum.CVA]: [41, 0, 40],
                    [SourceNameEnum.CVS]: [19, 0, 14],
                    [SourceNameEnum.GOO]: [41, 0, 40],
                    [SourceNameEnum.WIK]: [41, 0, 40],
                    [SourceNameEnum.WOD]: null
                }
            }),
            194: new LocalCountryModel({
                id: 194,
                populationCount: 1876854,
                sourcesData: {
                    [SourceNameEnum.CAC]: [39043, 626, 27113],
                    [SourceNameEnum.CLN]: [41615, 644, 29018],
                    [SourceNameEnum.COA]: [41615, 644, 29018],
                    [SourceNameEnum.CVA]: [41615, 644, 29018],
                    [SourceNameEnum.CVS]: [962, 19, 627],
                    [SourceNameEnum.GOO]: [41615, 644, 29018],
                    [SourceNameEnum.WIK]: [41615, 644, 29018],
                    [SourceNameEnum.WOD]: [41615, 644, 29018]
                }
            }),
            195: new LocalCountryModel({
                id: 195,
                populationCount: 6825946,
                sourcesData: {
                    [SourceNameEnum.CAC]: [177996, 1456, 126460],
                    [SourceNameEnum.CLN]: [183888, 1479, 127959],
                    [SourceNameEnum.COA]: [183888, 1479, 127959],
                    [SourceNameEnum.CVA]: [183888, 1479, 127959],
                    [SourceNameEnum.CVS]: [886, 26, 236],
                    [SourceNameEnum.GOO]: [183888, 1479, 127959],
                    [SourceNameEnum.WIK]: [183888, 1479, 127959],
                    [SourceNameEnum.WOD]: null
                }
            }),
            196: new LocalCountryModel({
                id: 196,
                populationCount: 2149924,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3094, 51, 1480],
                    [SourceNameEnum.CLN]: [3206, 65, 1496],
                    [SourceNameEnum.COA]: [3206, 51, 1496],
                    [SourceNameEnum.CVA]: [3206, 65, 1496],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [3206, 65, 1496],
                    [SourceNameEnum.WIK]: [2725, 51, 1466],
                    [SourceNameEnum.WOD]: null
                }
            }),
            197: new LocalCountryModel({
                id: 197,
                populationCount: 5112910,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1779, 83, 1406],
                    [SourceNameEnum.CLN]: [1779, 83, 1406],
                    [SourceNameEnum.COA]: [1779, 83, 1406],
                    [SourceNameEnum.CVA]: [1779, 83, 1406],
                    [SourceNameEnum.CVS]: [215, 20, 105],
                    [SourceNameEnum.GOO]: [1800, 83, 1418],
                    [SourceNameEnum.WIK]: [1779, 83, 1406],
                    [SourceNameEnum.WOD]: null
                }
            }),
            198: new LocalCountryModel({
                id: 198,
                populationCount: 6910670,
                sourcesData: {
                    [SourceNameEnum.CAC]: [99935, 1459, 71273],
                    [SourceNameEnum.CLN]: [100744, 1487, 73252],
                    [SourceNameEnum.COA]: [100744, 1487, 73252],
                    [SourceNameEnum.CVA]: [100744, 1487, 73252],
                    [SourceNameEnum.CVS]: [64, 3, 28],
                    [SourceNameEnum.GOO]: [100744, 1487, 73252],
                    [SourceNameEnum.WIK]: [100744, 1487, 73252],
                    [SourceNameEnum.WOD]: null
                }
            }),
            199: new LocalCountryModel({
                id: 199,
                populationCount: 38128,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2104, 39, 1810],
                    [SourceNameEnum.CLN]: [2104, 39, 1810],
                    [SourceNameEnum.COA]: [2175, 39, 1810],
                    [SourceNameEnum.CVA]: [2104, 39, 1810],
                    [SourceNameEnum.CVS]: [82, 1, 55],
                    [SourceNameEnum.GOO]: [2221, 39, 1810],
                    [SourceNameEnum.WIK]: [2104, 39, 1810],
                    [SourceNameEnum.WOD]: null
                }
            }),
            200: new LocalCountryModel({
                id: 200,
                populationCount: 2706104,
                sourcesData: {
                    [SourceNameEnum.CAC]: [138219, 1422, 66485],
                    [SourceNameEnum.CLN]: [145399, 1614, 76703],
                    [SourceNameEnum.COA]: [143903, 1589, 71028],
                    [SourceNameEnum.CVA]: [145399, 1614, 76703],
                    [SourceNameEnum.CVS]: [1511, 54, 934],
                    [SourceNameEnum.GOO]: [145399, 1614, 76703],
                    [SourceNameEnum.WIK]: [145399, 1614, 76703],
                    [SourceNameEnum.WOD]: [145399, 1614, 76703]
                }
            }),
            201: new LocalCountryModel({
                id: 201,
                populationCount: 1464039,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [2059, 170, 1720],
                    [SourceNameEnum.WOD]: null
                }
            }),
            202: new LocalCountryModel({
                id: 202,
                populationCount: 630483,
                sourcesData: {
                    [SourceNameEnum.CAC]: [46415, 495, 40978],
                    [SourceNameEnum.CLN]: [46817, 501, 40978],
                    [SourceNameEnum.COA]: [46415, 495, 40978],
                    [SourceNameEnum.CVA]: [46817, 501, 40978],
                    [SourceNameEnum.CVS]: [3915, 103, 3665],
                    [SourceNameEnum.GOO]: [46817, 501, 40978],
                    [SourceNameEnum.WIK]: [46817, 501, 40978],
                    [SourceNameEnum.WOD]: [46817, 501, 40978]
                }
            }),
            203: new LocalCountryModel({
                id: 203,
                populationCount: 653673,
                sourcesData: {
                    [SourceNameEnum.CAC]: [46, 0, 46],
                    [SourceNameEnum.CLN]: [46, 0, 46],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [46, 0, 46],
                    [SourceNameEnum.CVS]: [45, 0, 43],
                    [SourceNameEnum.GOO]: [46, 0, 46],
                    [SourceNameEnum.WIK]: [46, 0, 46],
                    [SourceNameEnum.WOD]: null
                }
            }),
            204: new LocalCountryModel({
                id: 204,
                populationCount: 28020223,
                sourcesData: {
                    [SourceNameEnum.CAC]: [17714, 261, 17228],
                    [SourceNameEnum.CLN]: [17714, 261, 17228],
                    [SourceNameEnum.COA]: [17714, 261, 17228],
                    [SourceNameEnum.CVA]: [17714, 261, 17228],
                    [SourceNameEnum.CVS]: [230, 0, 108],
                    [SourceNameEnum.GOO]: [17714, 261, 17714],
                    [SourceNameEnum.WIK]: [17714, 261, 17228],
                    [SourceNameEnum.WOD]: null
                }
            }),
            205: new LocalCountryModel({
                id: 205,
                populationCount: 289000,
                sources: null
            }),
            206: new LocalCountryModel({
                id: 206,
                populationCount: 19360546,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6471, 189, 5700],
                    [SourceNameEnum.CLN]: [6684, 191, 5708],
                    [SourceNameEnum.COA]: [6684, 191, 5708],
                    [SourceNameEnum.CVA]: [6684, 191, 5708],
                    [SourceNameEnum.CVS]: [63, 3, 24],
                    [SourceNameEnum.GOO]: [6684, 191, 5708],
                    [SourceNameEnum.WIK]: [6684, 191, 5708],
                    [SourceNameEnum.WOD]: null
                }
            }),
            207: new LocalCountryModel({
                id: 207,
                populationCount: 32553377,
                sourcesData: {
                    [SourceNameEnum.CAC]: [110485, 463, 87460],
                    [SourceNameEnum.CLN]: [117373, 483, 94492],
                    [SourceNameEnum.COA]: [115078, 474, 91171],
                    [SourceNameEnum.CVA]: [117373, 483, 94492],
                    [SourceNameEnum.CVS]: [6819, 112, 5351],
                    [SourceNameEnum.GOO]: [117373, 483, 94492],
                    [SourceNameEnum.WIK]: [117373, 483, 94492],
                    [SourceNameEnum.WOD]: null
                }
            }),
            208: new LocalCountryModel({
                id: 208,
                populationCount: 544549,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13738, 48, 13125],
                    [SourceNameEnum.CLN]: [13804, 48, 13150],
                    [SourceNameEnum.COA]: [13804, 48, 13150],
                    [SourceNameEnum.CVA]: [13804, 48, 13150],
                    [SourceNameEnum.CVS]: [982, 4, 45],
                    [SourceNameEnum.GOO]: [13804, 48, 13150],
                    [SourceNameEnum.WIK]: [13804, 48, 13149],
                    [SourceNameEnum.WOD]: [13804, 48, 13150]
                }
            }),
            209: new LocalCountryModel({
                id: 209,
                populationCount: 20520637,
                sourcesData: {
                    [SourceNameEnum.CAC]: [7029, 269, 4548],
                    [SourceNameEnum.CLN]: [7203, 271, 4694],
                    [SourceNameEnum.COA]: [7203, 271, 4694],
                    [SourceNameEnum.CVA]: [7203, 271, 4694],
                    [SourceNameEnum.CVS]: [779, 46, 436],
                    [SourceNameEnum.GOO]: [7203, 271, 4694],
                    [SourceNameEnum.WIK]: [7090, 269, 4650],
                    [SourceNameEnum.WOD]: null
                }
            }),
            210: new LocalCountryModel({
                id: 210,
                populationCount: 442210,
                sourcesData: {
                    [SourceNameEnum.CAC]: [12665, 216, 11057],
                    [SourceNameEnum.CLN]: [12997, 220, 11211],
                    [SourceNameEnum.COA]: [12909, 219, 11178],
                    [SourceNameEnum.CVA]: [12997, 220, 11211],
                    [SourceNameEnum.CVS]: [522, 6, 443],
                    [SourceNameEnum.GOO]: [12997, 220, 11211],
                    [SourceNameEnum.WIK]: [12909, 219, 11178],
                    [SourceNameEnum.WOD]: [12997, 220, 11211]
                }
            }),
            211: new LocalCountryModel({
                id: 211,
                populationCount: 682333,
                sources: null
            }),
            212: new LocalCountryModel({
                id: 212,
                populationCount: 9346,
                sources: null
            }),
            213: new LocalCountryModel({
                id: 213,
                populationCount: 59190,
                sourcesData: {
                    [SourceNameEnum.CAC]: [4, 0, 4],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            214: new LocalCountryModel({
                id: 214,
                populationCount: 374931,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6091, 43, 98],
                    [SourceNameEnum.CLN]: [6091, 43, 98],
                    [SourceNameEnum.COA]: [6091, 43, 98],
                    [SourceNameEnum.CVA]: [6091, 43, 98],
                    [SourceNameEnum.CVS]: [189, 14, 91],
                    [SourceNameEnum.GOO]: [6091, 43, 98],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: [6091, 43, 98]
                }
            }),
            215: new LocalCountryModel({
                id: 215,
                populationCount: 4706222,
                sourcesData: {
                    [SourceNameEnum.CAC]: [14191, 339, 11095],
                    [SourceNameEnum.CLN]: [14581, 349, 11652],
                    [SourceNameEnum.COA]: [14581, 349, 11652],
                    [SourceNameEnum.CVA]: [14581, 349, 11652],
                    [SourceNameEnum.CVS]: [20, 2, 7],
                    [SourceNameEnum.GOO]: [14581, 349, 11652],
                    [SourceNameEnum.WIK]: [14364, 347, 11380],
                    [SourceNameEnum.WOD]: null
                }
            }),
            216: new LocalCountryModel({
                id: 216,
                populationCount: 1272602,
                sourcesData: {
                    [SourceNameEnum.CAC]: [527, 10, 496],
                    [SourceNameEnum.CLN]: [527, 10, 496],
                    [SourceNameEnum.COA]: [527, 10, 496],
                    [SourceNameEnum.CVA]: [527, 10, 496],
                    [SourceNameEnum.CVS]: [332, 10, 322],
                    [SourceNameEnum.GOO]: [527, 10, 496],
                    [SourceNameEnum.WIK]: [527, 10, 496],
                    [SourceNameEnum.WOD]: null
                }
            }),
            217: new LocalCountryModel({
                id: 217,
                populationCount: 275818,
                sourcesData: {
                    [SourceNameEnum.CAC]: [5890, 55, 2964],
                    [SourceNameEnum.CLN]: [5890, 55, 2964],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [5890, 55, 2964],
                    [SourceNameEnum.CVS]: [1210, 16, 627],
                    [SourceNameEnum.GOO]: [5890, 55, 2964],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: [5890, 55, 2964]
                }
            }),
            218: new LocalCountryModel({
                id: 218,
                populationCount: 129552786,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1413935, 124897, 1066771],
                    [SourceNameEnum.CLN]: [1437185, 126507, 1083768],
                    [SourceNameEnum.COA]: [1437185, 126507, 1083768],
                    [SourceNameEnum.CVA]: [1437185, 126507, 1083768],
                    [SourceNameEnum.CVS]: [42595, 4477, 28475],
                    [SourceNameEnum.GOO]: [1437185, 126507, 1083768],
                    [SourceNameEnum.WIK]: [1437185, 126507, 1083768],
                    [SourceNameEnum.WOD]: [1437185, 126507, 1083768]
                }
            }),
            219: new LocalCountryModel({
                id: 219,
                populationCount: 115524,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            220: new LocalCountryModel({
                id: 220,
                populationCount: 40,
                sources: null
            }),
            221: new LocalCountryModel({
                id: 221,
                populationCount: 4029792,
                sourcesData: {
                    [SourceNameEnum.CAC]: [143841, 2960, 129539],
                    [SourceNameEnum.CLN]: [145258, 3004, 131701],
                    [SourceNameEnum.COA]: [145258, 3004, 131701],
                    [SourceNameEnum.CVA]: [145258, 3004, 131701],
                    [SourceNameEnum.CVS]: [5553, 194, 2228],
                    [SourceNameEnum.GOO]: [145258, 3004, 131701],
                    [SourceNameEnum.WIK]: [145258, 3004, 131701],
                    [SourceNameEnum.WOD]: [145258, 3004, 131701]
                }
            }),
            222: new LocalCountryModel({
                id: 222,
                populationCount: 2054393,
                sources: null
            }),
            223: new LocalCountryModel({
                id: 223,
                populationCount: 39242,
                sourcesData: {
                    [SourceNameEnum.CAC]: [853, 3, 704],
                    [SourceNameEnum.CLN]: [885, 3, 718],
                    [SourceNameEnum.COA]: [885, 3, 718],
                    [SourceNameEnum.CVA]: [885, 3, 718],
                    [SourceNameEnum.CVS]: [96, 4, 87],
                    [SourceNameEnum.GOO]: [885, 3, 718],
                    [SourceNameEnum.WIK]: [573, 3, 497],
                    [SourceNameEnum.WOD]: null
                }
            }),
            224: new LocalCountryModel({
                id: 224,
                populationCount: 3302150,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1215, 1, 824],
                    [SourceNameEnum.CLN]: [1242, 1, 855],
                    [SourceNameEnum.COA]: [1242, 1, 855],
                    [SourceNameEnum.CVA]: [1242, 1, 855],
                    [SourceNameEnum.CVS]: [98, 0, 15],
                    [SourceNameEnum.GOO]: [1242, 1, 855],
                    [SourceNameEnum.WIK]: [1215, 1, 830],
                    [SourceNameEnum.WOD]: null
                }
            }),
            225: new LocalCountryModel({
                id: 225,
                populationCount: 628233,
                sourcesData: {
                    [SourceNameEnum.CAC]: [47782, 681, 38367],
                    [SourceNameEnum.CLN]: [48589, 684, 38780],
                    [SourceNameEnum.COA]: [48589, 684, 38780],
                    [SourceNameEnum.CVA]: [48589, 684, 38780],
                    [SourceNameEnum.CVS]: [324, 9, 309],
                    [SourceNameEnum.GOO]: [48589, 684, 38780],
                    [SourceNameEnum.WIK]: [48589, 684, 38780],
                    [SourceNameEnum.WOD]: [48589, 684, 38780]
                }
            }),
            226: new LocalCountryModel({
                id: 226,
                populationCount: 4992,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13, 1, 12],
                    [SourceNameEnum.CLN]: [13, 1, 12],
                    [SourceNameEnum.COA]: [13, 1, 12],
                    [SourceNameEnum.CVA]: [13, 1, 12],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [13, 1, 12],
                    [SourceNameEnum.WIK]: [13, 1, 12],
                    [SourceNameEnum.WOD]: null
                }
            }),
            227: new LocalCountryModel({
                id: 227,
                populationCount: 805056,
                sources: null
            }),
            228: new LocalCountryModel({
                id: 228,
                populationCount: 37110619,
                sourcesData: {
                    [SourceNameEnum.CAC]: [437332, 7355, 405251],
                    [SourceNameEnum.CLN]: [440970, 7425, 409638],
                    [SourceNameEnum.COA]: [440970, 7425, 409638],
                    [SourceNameEnum.CVA]: [440970, 7425, 409638],
                    [SourceNameEnum.CVS]: [6607, 190, 3310],
                    [SourceNameEnum.GOO]: [440970, 7425, 409638],
                    [SourceNameEnum.WIK]: [440970, 7425, 409638],
                    [SourceNameEnum.WOD]: null
                }
            }),
            229: new LocalCountryModel({
                id: 229,
                populationCount: 1811,
                sources: null
            }),
            230: new LocalCountryModel({
                id: 230,
                populationCount: 31659224,
                sourcesData: {
                    [SourceNameEnum.CAC]: [18485, 165, 16589],
                    [SourceNameEnum.CLN]: [18794, 167, 16680],
                    [SourceNameEnum.COA]: [18794, 167, 16680],
                    [SourceNameEnum.CVA]: [18794, 167, 16680],
                    [SourceNameEnum.CVS]: [115, 0, 35],
                    [SourceNameEnum.GOO]: [18794, 167, 16680],
                    [SourceNameEnum.WIK]: [18794, 167, 16680],
                    [SourceNameEnum.WOD]: null
                }
            }),
            231: new LocalCountryModel({
                id: 231,
                populationCount: 54582161,
                sourcesData: {
                    [SourceNameEnum.CAC]: [123740, 2664, 106121],
                    [SourceNameEnum.CLN]: [125042, 2697, 107777],
                    [SourceNameEnum.COA]: [125042, 2697, 107777],
                    [SourceNameEnum.CVA]: [125042, 2697, 107777],
                    [SourceNameEnum.CVS]: [181, 6, 84],
                    [SourceNameEnum.GOO]: [125042, 2697, 107777],
                    [SourceNameEnum.WIK]: [125042, 2697, 107777],
                    [SourceNameEnum.WOD]: null
                }
            }),
            232: new LocalCountryModel({
                id: 232,
                populationCount: 456100,
                sources: null
            }),
            233: new LocalCountryModel({
                id: 233,
                populationCount: 2561929,
                sourcesData: {
                    [SourceNameEnum.CAC]: [23333, 196, 19655],
                    [SourceNameEnum.CLN]: [24545, 208, 20727],
                    [SourceNameEnum.COA]: [24545, 208, 20727],
                    [SourceNameEnum.CVA]: [24545, 208, 20727],
                    [SourceNameEnum.CVS]: [16, 0, 12],
                    [SourceNameEnum.GOO]: [24545, 208, 20727],
                    [SourceNameEnum.WIK]: [24545, 208, 20727],
                    [SourceNameEnum.WOD]: null
                }
            }),
            234: new LocalCountryModel({
                id: 234,
                populationCount: 10824,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            235: new LocalCountryModel({
                id: 235,
                populationCount: 0,
                sources: null
            }),
            236: new LocalCountryModel({
                id: 236,
                populationCount: 29348881,
                sourcesData: {
                    [SourceNameEnum.CAC]: [260059, 1847, 251912],
                    [SourceNameEnum.CLN]: [261438, 1870, 253857],
                    [SourceNameEnum.COA]: [261019, 1864, 253107],
                    [SourceNameEnum.CVA]: [261438, 1870, 253857],
                    [SourceNameEnum.CVS]: [249, 0, 35],
                    [SourceNameEnum.GOO]: [261438, 1870, 253857],
                    [SourceNameEnum.WIK]: [261438, 1870, 253857],
                    [SourceNameEnum.WOD]: null
                }
            }),
            237: new LocalCountryModel({
                id: 237,
                populationCount: 17152392,
                sourcesData: {
                    [SourceNameEnum.CAC]: [787300, 11324, 0],
                    [SourceNameEnum.CLN]: [805164, 11529, 0],
                    [SourceNameEnum.COA]: [805164, 11529, 0],
                    [SourceNameEnum.CVA]: [805164, 11529, null],
                    [SourceNameEnum.CVS]: [43481, 5590, null],
                    [SourceNameEnum.GOO]: [805164, 11529, 0],
                    [SourceNameEnum.WIK]: [805164, 11529, null],
                    [SourceNameEnum.WOD]: [805164, 11529, null]
                }
            }),
            238: new LocalCountryModel({
                id: 238,
                populationCount: 286666,
                sourcesData: {
                    [SourceNameEnum.CAC]: [38, 0, 38],
                    [SourceNameEnum.CLN]: [38, 0, 38],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [38, 0, 38],
                    [SourceNameEnum.CVS]: [18, 0, 18],
                    [SourceNameEnum.GOO]: [38, 0, 38],
                    [SourceNameEnum.WIK]: [36, 0, 30],
                    [SourceNameEnum.WOD]: null
                }
            }),
            239: new LocalCountryModel({
                id: 239,
                populationCount: 4840420,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2162, 25, 2082],
                    [SourceNameEnum.CLN]: [2162, 25, 2082],
                    [SourceNameEnum.COA]: [2162, 25, 2082],
                    [SourceNameEnum.CVA]: [2162, 25, 2082],
                    [SourceNameEnum.CVS]: [1498, 21, 1421],
                    [SourceNameEnum.GOO]: [2162, 25, 2082],
                    [SourceNameEnum.WIK]: [2116, 25, 1680],
                    [SourceNameEnum.WOD]: null
                }
            }),
            240: new LocalCountryModel({
                id: 240,
                populationCount: 6660428,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6046, 165, 4225],
                    [SourceNameEnum.CLN]: [6046, 165, 4225],
                    [SourceNameEnum.COA]: [6046, 165, 4225],
                    [SourceNameEnum.CVA]: [6046, 165, 4225],
                    [SourceNameEnum.CVS]: [25, 8, 7],
                    [SourceNameEnum.GOO]: [6046, 165, 4225],
                    [SourceNameEnum.WIK]: [5938, 163, 4225],
                    [SourceNameEnum.WOD]: null
                }
            }),
            241: new LocalCountryModel({
                id: 241,
                populationCount: 24617107,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3208, 102, 1767],
                    [SourceNameEnum.CLN]: [3403, 106, 1828],
                    [SourceNameEnum.COA]: [3403, 106, 1828],
                    [SourceNameEnum.CVA]: [3403, 106, 1828],
                    [SourceNameEnum.CVS]: [876, 50, 677],
                    [SourceNameEnum.GOO]: [3403, 106, 1828],
                    [SourceNameEnum.WIK]: [3323, 102, 1825],
                    [SourceNameEnum.WOD]: null
                }
            }),
            242: new LocalCountryModel({
                id: 242,
                populationCount: 208504758,
                sourcesData: {
                    [SourceNameEnum.CAC]: [86576, 1278, 73322],
                    [SourceNameEnum.CLN]: [88587, 1294, 74373],
                    [SourceNameEnum.COA]: [88587, 1294, 74373],
                    [SourceNameEnum.CVA]: [88587, 1294, 74373],
                    [SourceNameEnum.CVS]: [5162, 167, 1180],
                    [SourceNameEnum.GOO]: [88587, 1294, 74373],
                    [SourceNameEnum.WIK]: [88587, 1294, 74373],
                    [SourceNameEnum.WOD]: null
                }
            }),
            243: new LocalCountryModel({
                id: 243,
                populationCount: 6620000,
                sources: null
            }),
            244: new LocalCountryModel({
                id: 244,
                populationCount: 1626,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            245: new LocalCountryModel({
                id: 245,
                populationCount: 1735,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            246: new LocalCountryModel({
                id: 246,
                populationCount: 480874,
                sources: null
            }),
            247: new LocalCountryModel({
                id: 247,
                populationCount: 25829540,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            248: new LocalCountryModel({
                id: 248,
                populationCount: 2083207,
                sourcesData: {
                    [SourceNameEnum.CAC]: [82794, 2488, 60706],
                    [SourceNameEnum.CLN]: [83743, 2510, 61943],
                    [SourceNameEnum.COA]: [83743, 2510, 61943],
                    [SourceNameEnum.CVA]: [83743, 2510, 61943],
                    [SourceNameEnum.CVS]: [1723, 95, 1235],
                    [SourceNameEnum.GOO]: [83743, 2510, 61943],
                    [SourceNameEnum.WIK]: [83743, 2510, 61943],
                    [SourceNameEnum.WOD]: [83743, 2510, 61943]
                }
            }),
            249: new LocalCountryModel({
                id: 249,
                populationCount: 701765,
                sources: null
            }),
            250: new LocalCountryModel({
                id: 250,
                populationCount: 372486,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [1412, 6, 1225],
                    [SourceNameEnum.WOD]: null
                }
            }),
            251: new LocalCountryModel({
                id: 251,
                populationCount: 1893667,
                sources: null
            }),
            252: new LocalCountryModel({
                id: 252,
                populationCount: 57559,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [122, 2, 19],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            253: new LocalCountryModel({
                id: 253,
                populationCount: 5441764,
                sourcesData: {
                    [SourceNameEnum.CAC]: [49010, 436, 37658],
                    [SourceNameEnum.CLN]: [49803, 436, 37658],
                    [SourceNameEnum.COA]: [49803, 436, 17998],
                    [SourceNameEnum.CVA]: [49803, 436, 37658],
                    [SourceNameEnum.CVS]: [8196, 232, 32],
                    [SourceNameEnum.GOO]: [49803, 436, 37658],
                    [SourceNameEnum.WIK]: [49938, 436, 37658],
                    [SourceNameEnum.WOD]: null
                }
            }),
            254: new LocalCountryModel({
                id: 254,
                populationCount: 5169697,
                sourcesData: {
                    [SourceNameEnum.CAC]: [128719, 1497, 121614],
                    [SourceNameEnum.CLN]: [128867, 1499, 121890],
                    [SourceNameEnum.COA]: [128867, 1499, 121890],
                    [SourceNameEnum.CVA]: [128867, 1499, 121890],
                    [SourceNameEnum.CVS]: [4341, 18, 1303],
                    [SourceNameEnum.GOO]: [128867, 1499, 121890],
                    [SourceNameEnum.WIK]: [128867, 1499, 121890],
                    [SourceNameEnum.WOD]: [128867, 1499, 121890]
                }
            }),
            255: new LocalCountryModel({
                id: 255,
                populationCount: 222849215,
                sourcesData: {
                    [SourceNameEnum.CAC]: [479715, 10105, 435073],
                    [SourceNameEnum.CLN]: [484362, 10258, 438974],
                    [SourceNameEnum.COA]: [484362, 10258, 438974],
                    [SourceNameEnum.CVA]: [484362, 10258, 438974],
                    [SourceNameEnum.CVS]: [35788, 770, 9695],
                    [SourceNameEnum.GOO]: [484362, 10258, 438974],
                    [SourceNameEnum.WIK]: [484362, 10258, 438974],
                    [SourceNameEnum.WOD]: null
                }
            }),
            256: new LocalCountryModel({
                id: 256,
                populationCount: 18094,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            257: new LocalCountryModel({
                id: 257,
                populationCount: 5155308,
                sourcesData: {
                    [SourceNameEnum.CAC]: [136736, 1371, 115127],
                    [SourceNameEnum.CLN]: [140287, 1446, 120403],
                    [SourceNameEnum.COA]: [139223, 1418, 118926],
                    [SourceNameEnum.CVA]: [140287, 1446, 120403],
                    [SourceNameEnum.CVS]: [375, 2, 310],
                    [SourceNameEnum.GOO]: [140287, 1446, 120403],
                    [SourceNameEnum.WIK]: [139223, 1418, 118926],
                    [SourceNameEnum.WOD]: null
                }
            }),
            258: new LocalCountryModel({
                id: 258,
                populationCount: 20,
                sources: null
            }),
            259: new LocalCountryModel({
                id: 259,
                populationCount: 4345468,
                sourcesData: {
                    [SourceNameEnum.CAC]: [242744, 3975, 192601],
                    [SourceNameEnum.CLN]: [249733, 4064, 197928],
                    [SourceNameEnum.COA]: [249733, 4064, 197928],
                    [SourceNameEnum.CVA]: [249733, 4064, 197928],
                    [SourceNameEnum.CVS]: [9118, 260, 6080],
                    [SourceNameEnum.GOO]: [249733, 4064, 197928],
                    [SourceNameEnum.WIK]: [249733, 4064, 197928],
                    [SourceNameEnum.WOD]: [249733, 4064, 197928]
                }
            }),
            260: new LocalCountryModel({
                id: 260,
                populationCount: 3347100,
                sources: null
            }),
            261: new LocalCountryModel({
                id: 261,
                populationCount: 9024778,
                sourcesData: {
                    [SourceNameEnum.CAC]: [780, 9, 661],
                    [SourceNameEnum.CLN]: [780, 9, 661],
                    [SourceNameEnum.COA]: [780, 9, 661],
                    [SourceNameEnum.CVA]: [780, 9, 661],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [780, 9, 661],
                    [SourceNameEnum.WIK]: [681, 7, 588],
                    [SourceNameEnum.WOD]: null
                }
            }),
            262: new LocalCountryModel({
                id: 262,
                populationCount: 7172416,
                sourcesData: {
                    [SourceNameEnum.CAC]: [106958, 2242, 81034],
                    [SourceNameEnum.CLN]: [108349, 2262, 81977],
                    [SourceNameEnum.COA]: [108349, 2262, 81977],
                    [SourceNameEnum.CVA]: [108349, 2262, 81977],
                    [SourceNameEnum.CVS]: [754, 11, 184],
                    [SourceNameEnum.GOO]: [108349, 2262, 81977],
                    [SourceNameEnum.WIK]: [108349, 2262, 81977],
                    [SourceNameEnum.WOD]: null
                }
            }),
            263: new LocalCountryModel({
                id: 263,
                populationCount: 33165406,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1012614, 37621, 951318],
                    [SourceNameEnum.CLN]: [1017199, 37724, 954982],
                    [SourceNameEnum.COA]: [1015137, 37680, 951318],
                    [SourceNameEnum.CVA]: [1017199, 37724, 954982],
                    [SourceNameEnum.CVS]: [80604, 2267, 25151],
                    [SourceNameEnum.GOO]: [1017199, 37724, 954982],
                    [SourceNameEnum.WIK]: [1017199, 37724, 954982],
                    [SourceNameEnum.WOD]: [1017199, 37724, 954982]
                }
            }),
            264: new LocalCountryModel({
                id: 264,
                populationCount: 0,
                sources: null
            }),
            265: new LocalCountryModel({
                id: 265,
                populationCount: 110255506,
                sourcesData: {
                    [SourceNameEnum.CAC]: [472532, 9230, 439509],
                    [SourceNameEnum.CLN]: [476916, 9253, 439942],
                    [SourceNameEnum.COA]: [475820, 9248, 439895],
                    [SourceNameEnum.CVA]: [476916, 9253, 439942],
                    [SourceNameEnum.CVS]: [11876, 790, 2337],
                    [SourceNameEnum.GOO]: [476916, 9253, 439942],
                    [SourceNameEnum.WIK]: [476916, 9253, 439942],
                    [SourceNameEnum.WOD]: [476916, 9253, 439942]
                }
            }),
            266: new LocalCountryModel({
                id: 266,
                populationCount: 50,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            267: new LocalCountryModel({
                id: 267,
                populationCount: 37824252,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1281414, 28019, 1025889],
                    [SourceNameEnum.CLN]: [1312780, 29058, 1055436],
                    [SourceNameEnum.COA]: [1305774, 28956, 1046281],
                    [SourceNameEnum.CVA]: [1312780, 29058, 1055436],
                    [SourceNameEnum.CVS]: [17615, 883, 6696],
                    [SourceNameEnum.GOO]: [1312780, 29058, 1055436],
                    [SourceNameEnum.WIK]: [1312780, 29058, 1055436],
                    [SourceNameEnum.WOD]: [1312780, 29058, 1055436]
                }
            }),
            268: new LocalCountryModel({
                id: 268,
                populationCount: 10182193,
                sourcesData: {
                    [SourceNameEnum.CAC]: [406051, 6830, 331016],
                    [SourceNameEnum.CLN]: [420629, 6972, 338668],
                    [SourceNameEnum.COA]: [420629, 6972, 338668],
                    [SourceNameEnum.CVA]: [420629, 6972, 338668],
                    [SourceNameEnum.CVS]: [28319, 1184, 3198],
                    [SourceNameEnum.GOO]: [420629, 6972, 338668],
                    [SourceNameEnum.WIK]: [420629, 6972, 338668],
                    [SourceNameEnum.WOD]: [420629, 6972, 338668]
                }
            }),
            269: new LocalCountryModel({
                id: 269,
                populationCount: 2833989,
                sourcesData: {
                    [SourceNameEnum.CAC]: [39, 2, 1],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: [39, 2, 1],
                    [SourceNameEnum.GOO]: [134478, 1526, 0],
                    [SourceNameEnum.WIK]: [72327, 1521, null],
                    [SourceNameEnum.WOD]: null
                }
            }),
            270: new LocalCountryModel({
                id: 270,
                populationCount: 4285000,
                sources: null
            }),
            271: new LocalCountryModel({
                id: 271,
                populationCount: 2907082,
                sourcesData: {
                    [SourceNameEnum.CAC]: [143621, 245, 141300],
                    [SourceNameEnum.CLN]: [144240, 245, 141680],
                    [SourceNameEnum.COA]: [144042, 245, 141556],
                    [SourceNameEnum.CVA]: [144240, 245, 141680],
                    [SourceNameEnum.CVS]: [28272, 14, 3356],
                    [SourceNameEnum.GOO]: [144240, 245, 141680],
                    [SourceNameEnum.WIK]: [144240, 245, 141680],
                    [SourceNameEnum.WOD]: [144240, 245, 141680]
                }
            }),
            272: new LocalCountryModel({
                id: 272,
                populationCount: 50,
                sources: null
            }),
            273: new LocalCountryModel({
                id: 273,
                populationCount: 1218107,
                sources: null
            }),
            274: new LocalCountryModel({
                id: 274,
                populationCount: 38379,
                sources: null
            }),
            275: new LocalCountryModel({
                id: 275,
                populationCount: 2000000,
                sources: null
            }),
            276: new LocalCountryModel({
                id: 276,
                populationCount: 19182963,
                sourcesData: {
                    [SourceNameEnum.CAC]: [627941, 15596, 554056],
                    [SourceNameEnum.CLN]: [637395, 15919, 571333],
                    [SourceNameEnum.COA]: [636201, 15841, 566365],
                    [SourceNameEnum.CVA]: [637395, 15919, 571333],
                    [SourceNameEnum.CVS]: [16247, 1053, 9053],
                    [SourceNameEnum.GOO]: [637395, 15919, 571333],
                    [SourceNameEnum.WIK]: [637395, 15919, 571333],
                    [SourceNameEnum.WOD]: [637395, 15919, 571333]
                }
            }),
            277: new LocalCountryModel({
                id: 277,
                populationCount: 1370,
                sources: null
            }),
            278: new LocalCountryModel({
                id: 278,
                populationCount: 1594,
                sources: null
            }),
            279: new LocalCountryModel({
                id: 279,
                populationCount: 145957321,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3131550, 56426, 2525418],
                    [SourceNameEnum.CLN]: [3212637, 58002, 2599035],
                    [SourceNameEnum.COA]: [3153960, 56798, 2553467],
                    [SourceNameEnum.CVA]: [3212637, 58002, 2599035],
                    [SourceNameEnum.CVS]: [252245, 2305, 53530],
                    [SourceNameEnum.GOO]: [3212637, 58002, 2599035],
                    [SourceNameEnum.WIK]: [3212637, 58002, 2599035],
                    [SourceNameEnum.WOD]: [3212637, 58002, 2599035]
                }
            }),
            280: new LocalCountryModel({
                id: 280,
                populationCount: 13098383,
                sourcesData: {
                    [SourceNameEnum.CAC]: [8250, 86, 6369],
                    [SourceNameEnum.CLN]: [8460, 94, 6598],
                    [SourceNameEnum.COA]: [8460, 94, 6598],
                    [SourceNameEnum.CVA]: [8460, 94, 6598],
                    [SourceNameEnum.CVS]: [287, 0, 168],
                    [SourceNameEnum.GOO]: [8460, 94, 6598],
                    [SourceNameEnum.WIK]: [8383, 92, 6542],
                    [SourceNameEnum.WOD]: null
                }
            }),
            281: new LocalCountryModel({
                id: 281,
                populationCount: 898315,
                sourcesData: {
                    [SourceNameEnum.CAC]: [8972, 42, 8496],
                    [SourceNameEnum.CLN]: [9037, 42, 8706],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [9037, 42, 8706],
                    [SourceNameEnum.CVS]: [440, 0, 354],
                    [SourceNameEnum.GOO]: [9037, 42, 8706],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            282: new LocalCountryModel({
                id: 282,
                populationCount: 1915,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [5, 0, 5],
                    [SourceNameEnum.WOD]: null
                }
            }),
            283: new LocalCountryModel({
                id: 283,
                populationCount: 502585,
                sources: null
            }),
            284: new LocalCountryModel({
                id: 284,
                populationCount: 9877,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [190, 1, 172],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [190, 1, 172],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [190, 1, 172],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            285: new LocalCountryModel({
                id: 285,
                populationCount: 5633,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            286: new LocalCountryModel({
                id: 286,
                populationCount: 53199,
                sourcesData: {
                    [SourceNameEnum.CAC]: [32, 0, 29],
                    [SourceNameEnum.CLN]: [32, 0, 29],
                    [SourceNameEnum.COA]: [32, 0, 29],
                    [SourceNameEnum.CVA]: [32, 0, 29],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [32, 0, 29],
                    [SourceNameEnum.WIK]: [32, 0, 29],
                    [SourceNameEnum.WOD]: null
                }
            }),
            287: new LocalCountryModel({
                id: 287,
                populationCount: 183961,
                sourcesData: {
                    [SourceNameEnum.CAC]: [340, 5, 278],
                    [SourceNameEnum.CLN]: [353, 5, 289],
                    [SourceNameEnum.COA]: [353, 5, 289],
                    [SourceNameEnum.CVA]: [353, 5, 289],
                    [SourceNameEnum.CVS]: [18, 0, 18],
                    [SourceNameEnum.GOO]: [353, 5, 289],
                    [SourceNameEnum.WIK]: [353, 5, 289],
                    [SourceNameEnum.WOD]: null
                }
            }),
            288: new LocalCountryModel({
                id: 288,
                populationCount: 38666,
                sourcesData: {
                    [SourceNameEnum.CAC]: [961, 12, 855],
                    [SourceNameEnum.CLN]: [995, 12, 855],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [995, 12, 855],
                    [SourceNameEnum.CVS]: [39, 3, 30],
                    [SourceNameEnum.GOO]: [995, 12, 855],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            289: new LocalCountryModel({
                id: 289,
                populationCount: 5794,
                sourcesData: {
                    [SourceNameEnum.CAC]: [16, 0, 14],
                    [SourceNameEnum.CLN]: [16, 0, 14],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [16, 0, 14],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [16, 0, 14],
                    [SourceNameEnum.WIK]: [16, 0, 12],
                    [SourceNameEnum.WOD]: null
                }
            }),
            290: new LocalCountryModel({
                id: 290,
                populationCount: 110940,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [121, 0, 98],
                    [SourceNameEnum.COA]: [121, 0, 98],
                    [SourceNameEnum.CVA]: [121, 0, 98],
                    [SourceNameEnum.CVS]: [17, 0, 12],
                    [SourceNameEnum.GOO]: [121, 0, 98],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            291: new LocalCountryModel({
                id: 291,
                populationCount: 964330,
                sources: null
            }),
            292: new LocalCountryModel({
                id: 292,
                populationCount: 199081,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2, 0, 2],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [2, 0, 2],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            293: new LocalCountryModel({
                id: 293,
                populationCount: 33931,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2384, 59, 2035],
                    [SourceNameEnum.CLN]: [2428, 59, 2042],
                    [SourceNameEnum.COA]: [2428, 59, 2042],
                    [SourceNameEnum.CVA]: [2428, 59, 2042],
                    [SourceNameEnum.CVS]: [648, 41, 172],
                    [SourceNameEnum.GOO]: [2428, 59, 2042],
                    [SourceNameEnum.WIK]: [2428, 59, 2042],
                    [SourceNameEnum.WOD]: null
                }
            }),
            294: new LocalCountryModel({
                id: 294,
                populationCount: 1651793,
                sources: null
            }),
            295: new LocalCountryModel({
                id: 295,
                populationCount: 35072663,
                sourcesData: {
                    [SourceNameEnum.CAC]: [362601, 6214, 353682],
                    [SourceNameEnum.CLN]: [362878, 6230, 354081],
                    [SourceNameEnum.COA]: [362878, 6230, 354081],
                    [SourceNameEnum.CVA]: [362878, 6230, 354081],
                    [SourceNameEnum.CVS]: [46869, 283, 19051],
                    [SourceNameEnum.GOO]: [362878, 6230, 354081],
                    [SourceNameEnum.WIK]: [362878, 6230, 354081],
                    [SourceNameEnum.WOD]: [362878, 6230, 354081]
                }
            }),
            296: new LocalCountryModel({
                id: 296,
                populationCount: 5463300,
                sources: null
            }),
            380: new LocalCountryModel({
                id: 380,
                populationCount: 0,
                sources: null
            }),
            297: new LocalCountryModel({
                id: 297,
                populationCount: 16947323,
                sourcesData: {
                    [SourceNameEnum.CAC]: [18945, 402, 17201],
                    [SourceNameEnum.CLN]: [19511, 416, 17433],
                    [SourceNameEnum.COA]: [19364, 410, 17375],
                    [SourceNameEnum.CVA]: [19511, 416, 17433],
                    [SourceNameEnum.CVS]: [2189, 23, 842],
                    [SourceNameEnum.GOO]: [19511, 416, 17433],
                    [SourceNameEnum.WIK]: [19364, 410, 17375],
                    [SourceNameEnum.WOD]: null
                }
            }),
            298: new LocalCountryModel({
                id: 298,
                populationCount: 8721353,
                sourcesData: {
                    [SourceNameEnum.CAC]: [334991, 3163, 31536],
                    [SourceNameEnum.CLN]: [339997, 3250, 31536],
                    [SourceNameEnum.COA]: [339997, 3250, 0],
                    [SourceNameEnum.CVA]: [339997, 3250, 31536],
                    [SourceNameEnum.CVS]: [10374, 224, 4084],
                    [SourceNameEnum.GOO]: [339997, 3250, 31536],
                    [SourceNameEnum.WIK]: [339997, 3250, null],
                    [SourceNameEnum.WOD]: [339997, 3250, 31536]
                }
            }),
            299: new LocalCountryModel({
                id: 299,
                populationCount: 0,
                sources: null
            }),
            300: new LocalCountryModel({
                id: 300,
                populationCount: 98514,
                sourcesData: {
                    [SourceNameEnum.CAC]: [256, 0, 212],
                    [SourceNameEnum.CLN]: [275, 0, 214],
                    [SourceNameEnum.COA]: [275, 0, 214],
                    [SourceNameEnum.CVA]: [275, 0, 214],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [275, 0, 214],
                    [SourceNameEnum.WIK]: [202, 0, 184],
                    [SourceNameEnum.WOD]: null
                }
            }),
            301: new LocalCountryModel({
                id: 301,
                populationCount: 5824432,
                sources: null
            }),
            302: new LocalCountryModel({
                id: 302,
                populationCount: 4969147,
                sources: null
            }),
            303: new LocalCountryModel({
                id: 303,
                populationCount: 8051400,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2583, 76, 1891],
                    [SourceNameEnum.CLN]: [2635, 76, 1906],
                    [SourceNameEnum.COA]: [2635, 76, 1906],
                    [SourceNameEnum.CVA]: [2635, 76, 1906],
                    [SourceNameEnum.CVS]: [408, 26, 97],
                    [SourceNameEnum.GOO]: [2635, 76, 1906],
                    [SourceNameEnum.WIK]: [2635, 76, 1906],
                    [SourceNameEnum.WOD]: null
                }
            }),
            304: new LocalCountryModel({
                id: 304,
                populationCount: 5872867,
                sourcesData: {
                    [SourceNameEnum.CAC]: [58569, 29, 58411],
                    [SourceNameEnum.CLN]: [58662, 29, 58459],
                    [SourceNameEnum.COA]: [58629, 29, 58449],
                    [SourceNameEnum.CVA]: [58662, 29, 58459],
                    [SourceNameEnum.CVS]: [26098, 21, 5973],
                    [SourceNameEnum.GOO]: [58662, 29, 58459],
                    [SourceNameEnum.WIK]: [58629, 29, 58449],
                    [SourceNameEnum.WOD]: null
                }
            }),
            305: new LocalCountryModel({
                id: 305,
                populationCount: 3138,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [18, 0, 18],
                    [SourceNameEnum.WOD]: null
                }
            }),
            306: new LocalCountryModel({
                id: 306,
                populationCount: 42876,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1434, 27, 1320],
                    [SourceNameEnum.CLN]: [1458, 27, 1342],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [1458, 27, 1342],
                    [SourceNameEnum.CVS]: [76, 15, 46],
                    [SourceNameEnum.GOO]: [1458, 27, 1342],
                    [SourceNameEnum.WIK]: [1458, 27, 1342],
                    [SourceNameEnum.WOD]: null
                }
            }),
            307: new LocalCountryModel({
                id: 307,
                populationCount: 5460643,
                sourcesData: {
                    [SourceNameEnum.CAC]: [173228, 2065, 124427],
                    [SourceNameEnum.CLN]: [186244, 2250, 128285],
                    [SourceNameEnum.COA]: [184508, 2250, 127190],
                    [SourceNameEnum.CVA]: [186244, 2250, 128285],
                    [SourceNameEnum.CVS]: [1477, 27, 1112],
                    [SourceNameEnum.GOO]: [186244, 2250, 128285],
                    [SourceNameEnum.WIK]: [184508, 2250, 127190],
                    [SourceNameEnum.WOD]: null
                }
            }),
            308: new LocalCountryModel({
                id: 308,
                populationCount: 2078938,
                sourcesData: {
                    [SourceNameEnum.CAC]: [119740, 2665, 97766],
                    [SourceNameEnum.CLN]: [123950, 2728, 100868],
                    [SourceNameEnum.COA]: [123950, 2728, 100868],
                    [SourceNameEnum.CVA]: [123950, 2728, 100868],
                    [SourceNameEnum.CVS]: [1464, 103, 267],
                    [SourceNameEnum.GOO]: [124165, 2774, 6298],
                    [SourceNameEnum.WIK]: [123950, 2728, null],
                    [SourceNameEnum.WOD]: [123950, 2728, 100868]
                }
            }),
            309: new LocalCountryModel({
                id: 309,
                populationCount: 694726,
                sourcesData: {
                    [SourceNameEnum.CAC]: [17, 0, 10],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [17, 0, 10],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            310: new LocalCountryModel({
                id: 310,
                populationCount: 16098954,
                sourcesData: {
                    [SourceNameEnum.CAC]: [4714, 130, 3612],
                    [SourceNameEnum.CLN]: [4714, 130, 3612],
                    [SourceNameEnum.COA]: [4714, 130, 3612],
                    [SourceNameEnum.CVA]: [4714, 130, 3612],
                    [SourceNameEnum.CVS]: [1284, 53, 135],
                    [SourceNameEnum.GOO]: [4714, 130, 3612],
                    [SourceNameEnum.WIK]: [4714, 130, 3605],
                    [SourceNameEnum.WOD]: null
                }
            }),
            311: new LocalCountryModel({
                id: 311,
                populationCount: 3508180,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [1354, 47, 1200],
                    [SourceNameEnum.WOD]: null
                }
            }),
            312: new LocalCountryModel({
                id: 312,
                populationCount: 59651410,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1039161, 28033, 867597],
                    [SourceNameEnum.CLN]: [1073887, 28887, 887701],
                    [SourceNameEnum.COA]: [1073887, 28887, 887701],
                    [SourceNameEnum.CVA]: [1073887, 28887, 887701],
                    [SourceNameEnum.CVS]: [12739, 238, 5676],
                    [SourceNameEnum.GOO]: [1073887, 28887, 887701],
                    [SourceNameEnum.WIK]: [1073887, 28887, 887701],
                    [SourceNameEnum.WOD]: [1073887, 28887, 887701]
                }
            }),
            313: new LocalCountryModel({
                id: 313,
                populationCount: 306510,
                sources: null
            }),
            314: new LocalCountryModel({
                id: 314,
                populationCount: 30,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            315: new LocalCountryModel({
                id: 315,
                populationCount: 51296216,
                sourcesData: {
                    [SourceNameEnum.CAC]: [60740, 900, 42271],
                    [SourceNameEnum.CLN]: [62593, 942, 43578],
                    [SourceNameEnum.COA]: [62593, 942, 43578],
                    [SourceNameEnum.CVA]: [62593, 942, 43578],
                    [SourceNameEnum.CVS]: [11018, 260, 9821],
                    [SourceNameEnum.GOO]: [62593, 942, 43578],
                    [SourceNameEnum.WIK]: [62593, 942, 43578],
                    [SourceNameEnum.WOD]: null
                }
            }),
            381: new LocalCountryModel({
                id: 381,
                populationCount: 0,
                sources: null
            }),
            316: new LocalCountryModel({
                id: 316,
                populationCount: 53532,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: [2163, 39, 1167],
                    [SourceNameEnum.WOD]: null
                }
            }),
            379: new LocalCountryModel({
                id: 379,
                populationCount: 500,
                sources: null
            }),
            317: new LocalCountryModel({
                id: 317,
                populationCount: 11266140,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3540, 63, 3131],
                    [SourceNameEnum.CLN]: [3558, 63, 3131],
                    [SourceNameEnum.COA]: [3558, 63, 3131],
                    [SourceNameEnum.CVA]: [3558, 63, 3131],
                    [SourceNameEnum.CVS]: [203, 0, 3],
                    [SourceNameEnum.GOO]: [3558, 63, 3131],
                    [SourceNameEnum.WIK]: [3540, 63, 3131],
                    [SourceNameEnum.WOD]: null
                }
            }),
            318: new LocalCountryModel({
                id: 318,
                populationCount: 46752943,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1921115, 50689, 0],
                    [SourceNameEnum.CLN]: [1936718, 50837, 0],
                    [SourceNameEnum.COA]: [1928265, 50837, 150376],
                    [SourceNameEnum.CVA]: [1936718, 50837, null],
                    [SourceNameEnum.CVS]: [272646, 27321, 186480],
                    [SourceNameEnum.GOO]: [1928265, 50837, 150376],
                    [SourceNameEnum.WIK]: [1928265, 50837, null],
                    [SourceNameEnum.WOD]: [1936718, 50837, null]
                }
            }),
            319: new LocalCountryModel({
                id: 319,
                populationCount: 21454462,
                sourcesData: {
                    [SourceNameEnum.CAC]: [42702, 199, 34623],
                    [SourceNameEnum.CLN]: [43856, 208, 36155],
                    [SourceNameEnum.COA]: [43856, 208, 36155],
                    [SourceNameEnum.CVA]: [43856, 208, 36155],
                    [SourceNameEnum.CVS]: [925, 9, 445],
                    [SourceNameEnum.GOO]: [43856, 208, 36155],
                    [SourceNameEnum.WIK]: [43856, 208, 36155],
                    [SourceNameEnum.WOD]: null
                }
            }),
            320: new LocalCountryModel({
                id: 320,
                populationCount: 44321626,
                sourcesData: {
                    [SourceNameEnum.CAC]: [23316, 1468, 13524],
                    [SourceNameEnum.CLN]: [23316, 1468, 13524],
                    [SourceNameEnum.COA]: [23316, 1468, 13524],
                    [SourceNameEnum.CVA]: [23316, 1468, 13524],
                    [SourceNameEnum.CVS]: [1818, 90, 198],
                    [SourceNameEnum.GOO]: [23316, 1468, 13524],
                    [SourceNameEnum.WIK]: [23316, 1468, 13524],
                    [SourceNameEnum.WOD]: null
                }
            }),
            321: new LocalCountryModel({
                id: 321,
                populationCount: 588968,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6181, 121, 5694],
                    [SourceNameEnum.CLN]: [6277, 123, 5771],
                    [SourceNameEnum.COA]: [6277, 123, 5771],
                    [SourceNameEnum.CVA]: [6277, 123, 5771],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [6277, 123, 5771],
                    [SourceNameEnum.WIK]: [6277, 123, 5771],
                    [SourceNameEnum.WOD]: [6277, 123, 5771]
                }
            }),
            322: new LocalCountryModel({
                id: 322,
                populationCount: 2939,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            323: new LocalCountryModel({
                id: 323,
                populationCount: 10128131,
                sourcesData: {
                    [SourceNameEnum.CAC]: [437379, 8727, 0],
                    [SourceNameEnum.CLN]: [437379, 8727, 0],
                    [SourceNameEnum.COA]: [437379, 8727, 0],
                    [SourceNameEnum.CVA]: [437379, 8727, null],
                    [SourceNameEnum.CVS]: [28582, 3529, 4971],
                    [SourceNameEnum.GOO]: [437379, 8727, 0],
                    [SourceNameEnum.WIK]: [437379, 8727, null],
                    [SourceNameEnum.WOD]: [437379, 8727, null]
                }
            }),
            324: new LocalCountryModel({
                id: 324,
                populationCount: 8684489,
                sourcesData: {
                    [SourceNameEnum.CAC]: [447905, 7594, 317600],
                    [SourceNameEnum.CLN]: [452296, 7704, 317600],
                    [SourceNameEnum.COA]: [452296, 7704, 317600],
                    [SourceNameEnum.CVA]: [452296, 7704, 317600],
                    [SourceNameEnum.CVS]: [30463, 1872, 27100],
                    [SourceNameEnum.GOO]: [452296, 7725, 317600],
                    [SourceNameEnum.WIK]: [452296, 7082, 317600],
                    [SourceNameEnum.WOD]: [452296, 7704, 317600]
                }
            }),
            325: new LocalCountryModel({
                id: 325,
                populationCount: 17676857,
                sourcesData: {
                    [SourceNameEnum.CAC]: [11344, 704, 5296],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: [11799, 734, 5615],
                    [SourceNameEnum.CVA]: [11526, 717, 5420],
                    [SourceNameEnum.CVS]: [48, 3, 29],
                    [SourceNameEnum.GOO]: [11526, 717, 5420],
                    [SourceNameEnum.WIK]: [11434, 711, 5350],
                    [SourceNameEnum.WOD]: null
                }
            }),
            326: new LocalCountryModel({
                id: 326,
                populationCount: 221161,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1014, 17, 966],
                    [SourceNameEnum.CLN]: [1022, 17, 973],
                    [SourceNameEnum.COA]: [1022, 17, 973],
                    [SourceNameEnum.CVA]: [1022, 17, 973],
                    [SourceNameEnum.CVS]: [235, 7, 1],
                    [SourceNameEnum.GOO]: [1022, 17, 973],
                    [SourceNameEnum.WIK]: [1022, 17, 973],
                    [SourceNameEnum.WOD]: null
                }
            }),
            327: new LocalCountryModel({
                id: 327,
                populationCount: 23836464,
                sourcesData: {
                    [SourceNameEnum.CAC]: [797, 7, 666],
                    [SourceNameEnum.CLN]: [808, 7, 686],
                    [SourceNameEnum.COA]: [802, 7, 682],
                    [SourceNameEnum.CVA]: [808, 7, 686],
                    [SourceNameEnum.CVS]: [440, 7, 383],
                    [SourceNameEnum.GOO]: [808, 7, 686],
                    [SourceNameEnum.WIK]: [808, 7, 686],
                    [SourceNameEnum.WOD]: null
                }
            }),
            328: new LocalCountryModel({
                id: 328,
                populationCount: 9634421,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13296, 90, 12799],
                    [SourceNameEnum.CLN]: [13296, 90, 12894],
                    [SourceNameEnum.COA]: [13296, 90, 0],
                    [SourceNameEnum.CVA]: [13296, 90, 12894],
                    [SourceNameEnum.CVS]: [907, 29, 12894],
                    [SourceNameEnum.GOO]: [13296, 90, 12894],
                    [SourceNameEnum.WIK]: [13071, 89, 12536],
                    [SourceNameEnum.WOD]: null
                }
            }),
            329: new LocalCountryModel({
                id: 329,
                populationCount: 60522941,
                sourcesData: {
                    [SourceNameEnum.CAC]: [509, 21, 183],
                    [SourceNameEnum.CLN]: [509, 21, 183],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [509, 21, 183],
                    [SourceNameEnum.CVS]: [509, 21, 183],
                    [SourceNameEnum.GOO]: [509, 21, 183],
                    [SourceNameEnum.WIK]: [null, null, null],
                    [SourceNameEnum.WOD]: null
                }
            }),
            330: new LocalCountryModel({
                id: 330,
                populationCount: 3894284,
                sources: null
            }),
            331: new LocalCountryModel({
                id: 331,
                populationCount: 21362,
                sources: null
            }),
            332: new LocalCountryModel({
                id: 332,
                populationCount: 69878900,
                sourcesData: {
                    [SourceNameEnum.CAC]: [6690, 61, 4212],
                    [SourceNameEnum.CLN]: [7379, 64, 4299],
                    [SourceNameEnum.COA]: [7379, 64, 4299],
                    [SourceNameEnum.CVA]: [7379, 64, 4299],
                    [SourceNameEnum.CVS]: [3018, 56, 2850],
                    [SourceNameEnum.GOO]: [7379, 64, 4299],
                    [SourceNameEnum.WIK]: [7379, 64, 4299],
                    [SourceNameEnum.WOD]: null
                }
            }),
            333: new LocalCountryModel({
                id: 333,
                populationCount: 3180000,
                sources: null
            }),
            334: new LocalCountryModel({
                id: 334,
                populationCount: 1329958,
                sourcesData: {
                    [SourceNameEnum.CAC]: [44, 0, 32],
                    [SourceNameEnum.CLN]: [44, 0, 32],
                    [SourceNameEnum.COA]: [44, 0, 32],
                    [SourceNameEnum.CVA]: [44, 0, 32],
                    [SourceNameEnum.CVS]: [24, 0, 21],
                    [SourceNameEnum.GOO]: [44, 0, 32],
                    [SourceNameEnum.WIK]: [30, 0, 30],
                    [SourceNameEnum.WOD]: null
                }
            }),
            335: new LocalCountryModel({
                id: 335,
                populationCount: 8368826,
                sourcesData: {
                    [SourceNameEnum.CAC]: [3611, 68, 3384],
                    [SourceNameEnum.CLN]: [3662, 68, 3443],
                    [SourceNameEnum.COA]: [3662, 68, 3443],
                    [SourceNameEnum.CVA]: [3662, 68, 3443],
                    [SourceNameEnum.CVS]: [238, 11, 96],
                    [SourceNameEnum.GOO]: [3662, 68, 3443],
                    [SourceNameEnum.WIK]: [3662, 68, 3443],
                    [SourceNameEnum.WOD]: null
                }
            }),
            336: new LocalCountryModel({
                id: 336,
                populationCount: 1357,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            337: new LocalCountryModel({
                id: 337,
                populationCount: 106196,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            338: new LocalCountryModel({
                id: 338,
                populationCount: 469000,
                sources: null
            }),
            339: new LocalCountryModel({
                id: 339,
                populationCount: 1072276,
                sources: null
            }),
            340: new LocalCountryModel({
                id: 340,
                populationCount: 1401490,
                sourcesData: {
                    [SourceNameEnum.CAC]: [7132, 126, 6628],
                    [SourceNameEnum.CLN]: [7158, 127, 6671],
                    [SourceNameEnum.COA]: [7158, 127, 6671],
                    [SourceNameEnum.CVA]: [7158, 127, 6671],
                    [SourceNameEnum.CVS]: [116, 8, 107],
                    [SourceNameEnum.GOO]: [7158, 127, 6671],
                    [SourceNameEnum.WIK]: [7158, 127, 6671],
                    [SourceNameEnum.WOD]: null
                }
            }),
            341: new LocalCountryModel({
                id: 341,
                populationCount: 11872847,
                sourcesData: {
                    [SourceNameEnum.CAC]: [137216, 4620, 104980],
                    [SourceNameEnum.CLN]: [140557, 4730, 105499],
                    [SourceNameEnum.COA]: [140557, 4730, 105499],
                    [SourceNameEnum.CVA]: [140557, 4730, 105499],
                    [SourceNameEnum.CVS]: [1032, 45, 770],
                    [SourceNameEnum.GOO]: [140557, 4730, 105499],
                    [SourceNameEnum.WIK]: [140557, 4730, 105499],
                    [SourceNameEnum.WOD]: null
                }
            }),
            342: new LocalCountryModel({
                id: 342,
                populationCount: 84744024,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2194272, 20642, 2078629],
                    [SourceNameEnum.CLN]: [2220855, 21093, 2114760],
                    [SourceNameEnum.COA]: [2220855, 21093, 2114760],
                    [SourceNameEnum.CVA]: [2220855, 21093, 2114760],
                    [SourceNameEnum.CVS]: [144749, 4007, 104030],
                    [SourceNameEnum.GOO]: [2220855, 21093, 2114760],
                    [SourceNameEnum.WIK]: [2220855, 21093, 2114760],
                    [SourceNameEnum.WOD]: [2220855, 21093, 2114760]
                }
            }),
            343: new LocalCountryModel({
                id: 343,
                populationCount: 6071412,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            344: new LocalCountryModel({
                id: 344,
                populationCount: 38717,
                sourcesData: {
                    [SourceNameEnum.CAC]: [874, 6, 764],
                    [SourceNameEnum.CLN]: [893, 6, 783],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [893, 6, 783],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [908, 6, 783],
                    [SourceNameEnum.WIK]: [908, 6, 783],
                    [SourceNameEnum.WOD]: null
                }
            }),
            345: new LocalCountryModel({
                id: 345,
                populationCount: 321722,
                sources: null
            }),
            346: new LocalCountryModel({
                id: 346,
                populationCount: 11792,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            347: new LocalCountryModel({
                id: 347,
                populationCount: 1513044,
                sources: null
            }),
            348: new LocalCountryModel({
                id: 348,
                populationCount: 46392576,
                sourcesData: {
                    [SourceNameEnum.CAC]: [34677, 251, 11579],
                    [SourceNameEnum.CLN]: [35511, 265, 11878],
                    [SourceNameEnum.COA]: [35511, 265, 11878],
                    [SourceNameEnum.CVA]: [35511, 265, 11878],
                    [SourceNameEnum.CVS]: [160, 0, 63],
                    [SourceNameEnum.GOO]: [35511, 265, 11878],
                    [SourceNameEnum.WIK]: [35511, 265, 11878],
                    [SourceNameEnum.WOD]: null
                }
            }),
            349: new LocalCountryModel({
                id: 349,
                populationCount: 43617631,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1045348, 18324, 698190],
                    [SourceNameEnum.CLN]: [1069517, 18731, 722615],
                    [SourceNameEnum.COA]: [1096855, 19437, 746680],
                    [SourceNameEnum.CVA]: [1069517, 18731, 722615],
                    [SourceNameEnum.CVS]: [16847, 456, 4143],
                    [SourceNameEnum.GOO]: [1069517, 18731, 722615],
                    [SourceNameEnum.WIK]: [1069517, 18731, 722615],
                    [SourceNameEnum.WOD]: [1069517, 18731, 722615]
                }
            }),
            350: new LocalCountryModel({
                id: 350,
                populationCount: 9940625,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: [211641, 674, 188100],
                    [SourceNameEnum.COA]: [209678, 671, 186019],
                    [SourceNameEnum.CVA]: [211641, 674, 188100],
                    [SourceNameEnum.CVS]: [21084, 208, 6930],
                    [SourceNameEnum.GOO]: [211641, 674, 188100],
                    [SourceNameEnum.WIK]: [209678, 671, 186019],
                    [SourceNameEnum.WOD]: null
                }
            }),
            351: new LocalCountryModel({
                id: 351,
                populationCount: 68048027,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2432888, 72548, 0],
                    [SourceNameEnum.CLN]: [2542065, 74125, 0],
                    [SourceNameEnum.COA]: [2549689, 74237, 5679],
                    [SourceNameEnum.CVA]: [2542065, 74125, null],
                    [SourceNameEnum.CVS]: [233151, 33614, null],
                    [SourceNameEnum.GOO]: [2542065, 74125, 0],
                    [SourceNameEnum.WIK]: [2542065, 74125, null],
                    [SourceNameEnum.WOD]: [2542065, 74125, null]
                }
            }),
            352: new LocalCountryModel({
                id: 352,
                populationCount: 331901165,
                sourcesData: {
                    [SourceNameEnum.CAC]: [20216991, 350778, 11998794],
                    [SourceNameEnum.CLN]: [20617346, 356445, 12175841],
                    [SourceNameEnum.COA]: [20128693, 347788, 0],
                    [SourceNameEnum.CVA]: [20617346, 356445, 12175841],
                    [SourceNameEnum.CVS]: [1457593, 86912, 318027],
                    [SourceNameEnum.GOO]: [20617346, 356445, 12175841],
                    [SourceNameEnum.WIK]: [20331785, 350853, 9170094],
                    [SourceNameEnum.WOD]: [20617346, 356445, 12175841]
                }
            }),
            353: new LocalCountryModel({
                id: 353,
                populationCount: 300,
                sourcesData: {
                    [SourceNameEnum.CAC]: [0, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            354: new LocalCountryModel({
                id: 354,
                populationCount: 3479069,
                sourcesData: {
                    [SourceNameEnum.CAC]: [18480, 174, 12996],
                    [SourceNameEnum.CLN]: [19753, 193, 13990],
                    [SourceNameEnum.COA]: [19753, 193, 13990],
                    [SourceNameEnum.CVA]: [19753, 193, 13990],
                    [SourceNameEnum.CVS]: [724, 19, 547],
                    [SourceNameEnum.GOO]: [19753, 193, 13990],
                    [SourceNameEnum.WIK]: [19753, 193, 13990],
                    [SourceNameEnum.WOD]: null
                }
            }),
            355: new LocalCountryModel({
                id: 355,
                populationCount: 33686949,
                sourcesData: {
                    [SourceNameEnum.CAC]: [76985, 614, 74789],
                    [SourceNameEnum.CLN]: [77182, 614, 75244],
                    [SourceNameEnum.COA]: [77182, 614, 75244],
                    [SourceNameEnum.CVA]: [77182, 614, 75244],
                    [SourceNameEnum.CVS]: [2645, 11, 2136],
                    [SourceNameEnum.GOO]: [77182, 614, 75244],
                    [SourceNameEnum.WIK]: [77126, 614, 75112],
                    [SourceNameEnum.WOD]: null
                }
            }),
            356: new LocalCountryModel({
                id: 356,
                populationCount: 310482,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1, 0, 1],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [1, 0, 1],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            357: new LocalCountryModel({
                id: 357,
                populationCount: 801,
                sourcesData: {
                    [SourceNameEnum.CAC]: [27, 0, 15],
                    [SourceNameEnum.CLN]: [27, 0, 15],
                    [SourceNameEnum.COA]: [27, 0, 15],
                    [SourceNameEnum.CVA]: [27, 0, 15],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [27, 0, 15],
                    [SourceNameEnum.WIK]: [29, 0, 15],
                    [SourceNameEnum.WOD]: null
                }
            }),
            358: new LocalCountryModel({
                id: 358,
                displayName: 'Venezuela',
                populationCount: 28456964,
                sourcesData: {
                    [SourceNameEnum.CAC]: [113121, 1025, 107203],
                    [SourceNameEnum.CLN]: [113884, 1030, 107901],
                    [SourceNameEnum.COA]: [113884, 1030, 107901],
                    [SourceNameEnum.CVA]: [113884, 1030, 107901],
                    [SourceNameEnum.CVS]: [455, 10, 220],
                    [SourceNameEnum.GOO]: [113884, 1030, 107901],
                    [SourceNameEnum.WIK]: [113558, 1028, 107583],
                    [SourceNameEnum.WOD]: null
                }
            }),
            359: new LocalCountryModel({
                id: 359,
                populationCount: 97731856,
                sourcesData: {
                    [SourceNameEnum.CAC]: [1456, 35, 1323],
                    [SourceNameEnum.CLN]: [1474, 35, 1325],
                    [SourceNameEnum.COA]: [1474, 35, 1325],
                    [SourceNameEnum.CVA]: [1482, 35, 1335],
                    [SourceNameEnum.CVS]: [312, 0, 260],
                    [SourceNameEnum.GOO]: [1482, 35, 1335],
                    [SourceNameEnum.WIK]: [1482, 35, 1335],
                    [SourceNameEnum.WOD]: null
                }
            }),
            360: new LocalCountryModel({
                id: 360,
                populationCount: 30231,
                sourcesData: {
                    [SourceNameEnum.CAC]: [86, 1, 74],
                    [SourceNameEnum.CLN]: [86, 1, 74],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [86, 1, 74],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [93, 1, 74],
                    [SourceNameEnum.WIK]: [72, 1, 70],
                    [SourceNameEnum.WOD]: null
                }
            }),
            361: new LocalCountryModel({
                id: 361,
                populationCount: 104258,
                sourcesData: {
                    [SourceNameEnum.CAC]: [17, 0, 0],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: [17, 0, 0],
                    [SourceNameEnum.GOO]: [2036, 23, 1901],
                    [SourceNameEnum.WIK]: [2036, 23, 1901],
                    [SourceNameEnum.WOD]: null
                }
            }),
            362: new LocalCountryModel({
                id: 362,
                populationCount: 1931809,
                sources: null
            }),
            363: new LocalCountryModel({
                id: 363,
                populationCount: 558000,
                sources: null
            }),
            364: new LocalCountryModel({
                id: 364,
                populationCount: 100,
                sources: null
            }),
            365: new LocalCountryModel({
                id: 365,
                populationCount: 3153000,
                sources: null
            }),
            366: new LocalCountryModel({
                id: 366,
                populationCount: 11239,
                sourcesData: {
                    [SourceNameEnum.CAC]: [4, 0, 1],
                    [SourceNameEnum.CLN]: null,
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: null,
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: null,
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            367: new LocalCountryModel({
                id: 367,
                populationCount: 3633795,
                sources: null
            }),
            368: new LocalCountryModel({
                id: 368,
                populationCount: 963600,
                sources: null
            }),
            369: new LocalCountryModel({
                id: 369,
                populationCount: 603846,
                sourcesData: {
                    [SourceNameEnum.CAC]: [10, 1, 8],
                    [SourceNameEnum.CLN]: [10, 1, 8],
                    [SourceNameEnum.COA]: [10, 1, 8],
                    [SourceNameEnum.CVA]: [10, 1, 8],
                    [SourceNameEnum.CVS]: null,
                    [SourceNameEnum.GOO]: [0, 0, 0],
                    [SourceNameEnum.WIK]: null,
                    [SourceNameEnum.WOD]: null
                }
            }),
            370: new LocalCountryModel({
                id: 370,
                populationCount: 24870000,
                sources: null
            }),
            371: new LocalCountryModel({
                id: 371,
                populationCount: 30129640,
                sourcesData: {
                    [SourceNameEnum.CAC]: [2097, 610, 1392],
                    [SourceNameEnum.CLN]: [2101, 610, 1396],
                    [SourceNameEnum.COA]: [2101, 610, 1396],
                    [SourceNameEnum.CVA]: [2101, 610, 1396],
                    [SourceNameEnum.CVS]: [85, 12, 1],
                    [SourceNameEnum.GOO]: [2103, 611, 1396],
                    [SourceNameEnum.WIK]: [2436, 660, 1580],
                    [SourceNameEnum.WOD]: null
                }
            }),
            372: new LocalCountryModel({
                id: 372,
                populationCount: 3594290,
                sources: null
            }),
            373: new LocalCountryModel({
                id: 373,
                populationCount: 18624059,
                sourcesData: {
                    [SourceNameEnum.CAC]: [20462, 386, 18530],
                    [SourceNameEnum.CLN]: [20997, 390, 18773],
                    [SourceNameEnum.COA]: [20997, 390, 18773],
                    [SourceNameEnum.CVA]: [20997, 390, 18773],
                    [SourceNameEnum.CVS]: [654, 7, 124],
                    [SourceNameEnum.GOO]: [20997, 390, 18773],
                    [SourceNameEnum.WIK]: [20997, 390, 18773],
                    [SourceNameEnum.WOD]: null
                }
            }),
            374: new LocalCountryModel({
                id: 374,
                populationCount: 1303569,
                sources: null
            }),
            375: new LocalCountryModel({
                id: 375,
                populationCount: 363583,
                sources: null
            }),
            376: new LocalCountryModel({
                id: 376,
                populationCount: 14966040,
                sourcesData: {
                    [SourceNameEnum.CAC]: [13625, 360, 11154],
                    [SourceNameEnum.CLN]: [14084, 369, 11347],
                    [SourceNameEnum.COA]: [14084, 369, 11347],
                    [SourceNameEnum.CVA]: [14084, 369, 11347],
                    [SourceNameEnum.CVS]: [37, 4, 13],
                    [SourceNameEnum.GOO]: [14084, 369, 11347],
                    [SourceNameEnum.WIK]: [14084, 369, 11347],
                    [SourceNameEnum.WOD]: null
                }
            }),
            377: new LocalCountryModel({
                id: 377,
                populationCount: 12989,
                sourcesData: {
                    [SourceNameEnum.CAC]: null,
                    [SourceNameEnum.CLN]: [721, 15, 706],
                    [SourceNameEnum.COA]: null,
                    [SourceNameEnum.CVA]: [721, 15, 706],
                    [SourceNameEnum.CVS]: [712, 13, 651],
                    [SourceNameEnum.GOO]: [712, 13, 699],
                    [SourceNameEnum.WIK]: [3204, 23, 1560],
                    [SourceNameEnum.WOD]: null
                }
            })
        };
        this.countriesKeysList = Object.keys(this.countriesList);
    }
}

export default new LocalData();