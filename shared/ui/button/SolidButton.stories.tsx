import type { Meta, StoryObj } from '@storybook/react'

import SolidButton from './SolidButton'
import { BUTTON_VARIANT, BUTTON_SIZE } from './variants'

const meta: Meta<typeof SolidButton> = {
  title: 'Atoms/Button/SolidButton',
  component: SolidButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SolidButton 컴포넌트는 버튼을 생성하는 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANT),
      description: '버튼의 스타일 변형할 때 사용하는 변수입니다',
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZE),
      description: '버튼의 크기를 선택할 때 사용하는 변수입니다',
    },
    shape: {
      control: 'select',
      options: Object.values(BUTTON_SIZE),
      description: '버튼의 모양을 선택할 때 사용하는 변수입니다',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부입니다',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼이 전체 너비를 차지하는지 여부입니다',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: BUTTON_VARIANT.PRIMARY,
    size: BUTTON_SIZE.LARGE,
    children: 'Click Me',
  },
}

export const Secondary: Story = {
  args: {
    variant: BUTTON_VARIANT.SECONDARY,
    size: BUTTON_SIZE.MEDIUM,
    children: 'Click Me',
  },
}

export const Danger: Story = {
  args: {
    variant: BUTTON_VARIANT.DANGER,
    size: BUTTON_SIZE.SMALL,
    children: 'Click Me',
  },
}

// TODO: WithIcon 스토리 추가
