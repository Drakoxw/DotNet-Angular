import { Component, Input, OnInit } from '@angular/core';

const classZises = {
  xsm: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  base: 'text-sm px-5 py-2.5',
  lg: 'px-5 py-3 text-base',
  xlg: 'text-base px-6 py-3.5',
}

const classStyleDefault = {
  default:
    'mr-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  alternative:
    'mr-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'mr-2 mb-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  light:
    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  green:
    'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow:
    'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg mr-2 mb-2 dark:focus:ring-yellow-900',
  purple:
    'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
};

const classStylePills = {
  default:
    'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  alternative:
    'mr-2 mb-2  font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'mr-2 mb-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  green:
    'mr-2 mb-2 text-white bg-green-700 hover:bg-greeen-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full  text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900',
  light:
    'mr-2 mb-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  font-medium rounded-full  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  red: 'mr-2 mb-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full  text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow:
    'mr-2 mb-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  text-center dark:focus:ring-yellow-900',
  purple:
    'mb-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
};

const classStyleGradientMonochrome = {
  default:
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-center mr-2 mb-2',
  green:
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg  text-center mr-2 mb-2',
  cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-center mr-2 mb-2',
  teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg  text-center mr-2 mb-2',
  lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg  text-center mr-2 mb-2',
  red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  text-center mr-2 mb-2',
  pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg  text-center mr-2 mb-2',
  purple:
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  text-center mr-2 mb-2',
};

const classStyleColoredShadows = {
  default:
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  green:
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
  purple:
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  text-center mr-2 mb-2',
};

const classStyleGradientDuotone = {
  purpleToBlue:
    'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-center mr-2 mb-2',
  cyanToBlue:
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-center mr-2 mb-2',
  greenToBlue:
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  text-center mr-2 mb-2',
  purpleToPink:
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  text-center mr-2 mb-2',
  pinkToOrange:
    'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  text-center mr-2 mb-2',
  tealToLime:
    'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg  text-center mr-2 mb-2',
  redToYellow:
    'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg  text-center mr-2 mb-2',
};

const spanClass = 'relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
const classStyleGradientOutline = {
  purpleToBlue: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
  },
  cyanToBlue: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
  },
  greenToBlue: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  },
  purpleToPink: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
  },
  pinkToOrange: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
  },
  tealToLime: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',
  },
  redToYellow: {
    span: spanClass,
    button:
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  },
};

type Size = 'xsm' | 'sm' | 'base' | 'lg' | 'xlg'

type StyleButton =
  | 'default'
  | 'alternative'
  | 'dark'
  | 'light'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'defaultPills'
  | 'alternativePills'
  | 'darkPills'
  | 'greenPills'
  | 'redPills'
  | 'yellowPills'
  | 'lightPills'
  | 'purplePills'
  | 'defaultGradMono'
  | 'greenGradMono'
  | 'cyanGradMono'
  | 'tealGradMono'
  | 'limeGradMono'
  | 'redGradMono'
  | 'pinkGradMono'
  | 'purpleGradMono'
  | 'defaultColoredShadows'
  | 'greenColoredShadows'
  | 'cyanColoredShadows'
  | 'tealColoredShadows'
  | 'limeColoredShadows'
  | 'redColoredShadows'
  | 'pinkColoredShadows'
  | 'purpleColoredShadows'
  | 'purpleToBlueGradientDuotone'
  | 'cyanToBlueGradientDuotone'
  | 'greenToBlueGradientDuotone'
  | 'purpleToPinkGradientDuotone'
  | 'tealToLimeGradientDuotone'
  | 'redToYellowGradientDuotone'
  | 'purpleToBlueGradientOutline'
  | 'cyanToBlueGradientOutline'
  | 'greenToBlueGradientOutline'
  | 'purpleToPinkGradientOutline'
  | 'tealToLimeGradientOutline'
  | 'redToYellowGradientOutline';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() styleButton!: StyleButton;
  @Input() set size(s: Size) {
    this.changeSize(s)
  }
  @Input() set isLoading(load: boolean) {
    this.load = load
  }

  load: boolean = false
  classZise: string = classZises.base;
  classText: string = '';
  classButton: string = classStyleDefault.default;

  ngOnInit(): void {
    if (this.styleButton) {
      this.classText = ''
      switch (this.styleButton) {
        case 'default':
          this.classButton = classStyleDefault.default;
          break;
        case 'alternative':
          this.classButton = classStyleDefault.alternative;
          break;
        case 'dark':
          this.classButton = classStyleDefault.dark;
          break;
        case 'light':
          this.classButton = classStyleDefault.light;
          break;
        case 'green':
          this.classButton = classStyleDefault.green;
          break;
        case 'red':
          this.classButton = classStyleDefault.red;
          break;
        case 'yellow':
          this.classButton = classStyleDefault.yellow;
          break;
        case 'purple':
          this.classButton = classStyleDefault.purple;
          break;

        case 'purplePills':
          this.classButton = classStylePills.purple;
          break;
        case 'yellowPills':
          this.classButton = classStylePills.yellow;
          break;
        case 'redPills':
          this.classButton = classStylePills.red;
          break;
        case 'greenPills':
          this.classButton = classStylePills.green;
          break;
        case 'lightPills':
          this.classButton = classStylePills.light;
          break;
        case 'darkPills':
          this.classButton = classStylePills.dark;
          break;
        case 'alternativePills':
          this.classButton = classStylePills.alternative;
          break;
        case 'defaultPills':
          this.classButton = classStylePills.default;
          break;

        case 'defaultGradMono':
          this.classButton = classStyleGradientMonochrome.default;
          break;
        case 'greenGradMono':
          this.classButton = classStyleGradientMonochrome.green;
          break;
        case 'cyanGradMono':
          this.classButton = classStyleGradientMonochrome.cyan;
          break;
        case 'tealGradMono':
          this.classButton = classStyleGradientMonochrome.teal;
          break;
        case 'limeGradMono':
          this.classButton = classStyleGradientMonochrome.lime;
          break;
        case 'redGradMono':
          this.classButton = classStyleGradientMonochrome.red;
          break;
        case 'pinkGradMono':
          this.classButton = classStyleGradientMonochrome.pink;
          break;
        case 'purpleGradMono':
          this.classButton = classStyleGradientMonochrome.purple;
          break;

        case 'defaultColoredShadows':
          this.classButton = classStyleColoredShadows.default;
          break;
        case 'greenColoredShadows':
          this.classButton = classStyleColoredShadows.green;
          break;
        case 'cyanColoredShadows':
          this.classButton = classStyleColoredShadows.cyan;
          break;
        case 'tealColoredShadows':
          this.classButton = classStyleColoredShadows.teal;
          break;
        case 'limeColoredShadows':
          this.classButton = classStyleColoredShadows.lime;
          break;
        case 'redColoredShadows':
          this.classButton = classStyleColoredShadows.red;
          break;
        case 'pinkColoredShadows':
          this.classButton = classStyleColoredShadows.pink;
          break;
        case 'purpleColoredShadows':
          this.classButton = classStyleColoredShadows.purple;
          break;

        case 'purpleToBlueGradientDuotone':
          this.classButton = classStyleGradientDuotone.purpleToBlue;
          break;
        case 'cyanToBlueGradientDuotone':
          this.classButton = classStyleGradientDuotone.cyanToBlue;
          break;
        case 'greenToBlueGradientDuotone':
          this.classButton = classStyleGradientDuotone.greenToBlue;
          break;
        case 'purpleToPinkGradientDuotone':
          this.classButton = classStyleGradientDuotone.purpleToPink;
          break;
        case 'tealToLimeGradientDuotone':
          this.classButton = classStyleGradientDuotone.tealToLime;
          break;
        case 'redToYellowGradientDuotone':
          this.classButton = classStyleGradientDuotone.redToYellow;
          break;

        case 'purpleToBlueGradientOutline':
          this.classButton = classStyleGradientOutline.purpleToBlue.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.purpleToBlue.span}`;
          break;
        case 'cyanToBlueGradientOutline':
          this.classButton = classStyleGradientOutline.cyanToBlue.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.cyanToBlue.span}`;
          break;
        case 'greenToBlueGradientOutline':
          this.classButton = classStyleGradientOutline.greenToBlue.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.greenToBlue.span}`;
          break;
        case 'purpleToPinkGradientOutline':
          this.classButton = classStyleGradientOutline.purpleToPink.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.purpleToPink.span}`;
          break;
        case 'tealToLimeGradientOutline':
          this.classButton = classStyleGradientOutline.tealToLime.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.tealToLime.span}`;
          break;
        case 'redToYellowGradientOutline':
          this.classButton = classStyleGradientOutline.redToYellow.button;
          this.classText = `${classZises.base} ${classStyleGradientOutline.redToYellow.span}`;
          break;

        default:
          this.classButton = classStyleDefault.default;
          break;
      }
    }
  }

  changeSize(s: Size) {
    if (this.styleButton.includes('Outline')) {
      this.classZise = ''
      return this.classText = `${spanClass} ${classZises[s]}`
    }
    return this.classZise = classZises[s]
  }
}
