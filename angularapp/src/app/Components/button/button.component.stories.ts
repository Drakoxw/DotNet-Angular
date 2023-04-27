import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { toCapitalize } from 'src/app/utils';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      options: ['xsm', 'sm', 'base', 'lg', 'xlg'],
      control: { type: 'radio' },
    },
    styleButton: {
      options: [
        'default',
        'alternative',
        'dark',
        'light',
        'green',
        'red',
        'yellow',
        'purple',
        'defaultPills',
        'alternativePills',
        'darkPills',
        'greenPills',
        'lightPills',
        'redPills',
      ],
      control: { type: 'radio' },
    },
  },
  args: {
    isDisable: false,
    size: 'base',
    isLoading: false,
    styleButton: 'default',
  },
};

export default meta;
type StoryX = StoryObj<ButtonComponent>;

export const ExampleBasic: StoryX = {
  render: (args) => ({
    props: args,
    template: `<app-button
    size="${args.size}"
    [isLoading]="${args.isLoading}"
    [isDisable]="${args.isDisable}"
    styleButton="${args.styleButton}">Style ${toCapitalize(
      args.styleButton
    )}</app-button>`,
  }),
  args: {
    isDisable: false,
    size: 'base',
    isLoading: false,
    styleButton: 'default',
  },
};

export const ExampleDefaultPills = { ...ExampleBasic };
ExampleDefaultPills.argTypes = {
  styleButton: {
    options: [
      'defaultPills',
      'alternativePills',
      'darkPills',
      'greenPills',
      'lightPills',
      'redPills',
      'yellowPills',
      'purplePills',
    ],
  },
};
ExampleDefaultPills.args = {
  styleButton: 'defaultPills',
};

export const GradientMonochrome = { ...ExampleBasic };
GradientMonochrome.argTypes = {
  styleButton: {
    options: [
      'defaultGradMono',
      'greenGradMono',
      'cyanGradMono',
      'tealGradMono',
      'limeGradMono',
      'redGradMono',
      'pinkGradMono',
      'purpleGradMono',
    ],
  },
};
GradientMonochrome.args = {
  styleButton: 'defaultGradMono',
};

export const GradientDuotone = { ...ExampleBasic };
GradientDuotone.argTypes = {
  styleButton: {
    options: [
      'purpleToBlueGradientDuotone',
      'cyanToBlueGradientDuotone',
      'greenToBlueGradientDuotone',
      'purpleToPinkGradientDuotone',
      'pinkToOrageGradientDuotone',
      'tealToLimeGradientDuotone',
      'redToYellowGradientDuotone',
    ],
  },
};
GradientMonochrome.args = {
  styleButton: 'purpleToBlueGradientDuotone',
};

export const ColoredShadows = { ...ExampleBasic };
ColoredShadows.argTypes = {
  styleButton: {
    options: [
      'defaultColoredShadows',
      'greenColoredShadows',
      'cyanColoredShadows',
      'tealColoredShadows',
      'limeColoredShadows',
      'redColoredShadows',
      'pinkColoredShadows',
      'purpleColoredShadows',
    ],
  },
};
ColoredShadows.args = {
  styleButton: 'defaultColoredShadows',
};

export const GradientOutline  = { ...ExampleBasic };
GradientOutline.argTypes = {
  styleButton: {
    options: [
      'purpleToBlueGradientOutline',
      'cyanToBlueGradientOutline',
      'greenToBlueGradientOutline',
      'purpleToPinkGradientOutline',
      'tealToLimeGradientOutline',
      'redToYellowGradientOutline',
    ],
  },
};
GradientOutline.args = {
  styleButton: 'purpleToBlueGradientOutline',
};
