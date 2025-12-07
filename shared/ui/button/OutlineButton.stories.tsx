import type { Meta, StoryObj } from '@storybook/react'

import OutlineButton from './OutlineButton'
import { BUTTON_SHAPE, BUTTON_SIZE, BUTTON_VARIANT } from './variants'

const meta: Meta<typeof OutlineButton> = {
  title: 'Atoms/Button/OutlineButton',
  component: OutlineButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'OutlineButton 컴포넌트는 버튼을 생성하는 컴포넌트',
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
      options: Object.values(BUTTON_SHAPE),
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

export const Large: Story = {
  args: {
    variant: BUTTON_VARIANT.PRIMARY,
    size: BUTTON_SIZE.LARGE,
    children: 'Click Me',
  },
}

export const Medium: Story = {
  args: {
    variant: BUTTON_VARIANT.PRIMARY,
    size: BUTTON_SIZE.MEDIUM,
    children: 'Click Me',
  },
}

export const Small: Story = {
  args: {
    variant: BUTTON_VARIANT.PRIMARY,
    size: BUTTON_SIZE.SMALL,
    children: 'Click Me',
  },
}

// TODO: WithIcon 스토리 추가
