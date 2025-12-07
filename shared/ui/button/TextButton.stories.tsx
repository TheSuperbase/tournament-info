import type { Meta, StoryObj } from '@storybook/react'

import TextButton from './TextButton'
import { BUTTON_SIZE, BUTTON_VARIANT } from './variants'

const meta: Meta<typeof TextButton> = {
  title: 'Atoms/Button/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TextButton 컴포넌트는 버튼을 생성하는 컴포넌트',
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
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부입니다',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: BUTTON_VARIANT.PRIMARY,
    size: BUTTON_SIZE.MEDIUM,
    children: 'Click Me',
  },
}

// TODO: WithIcon 스토리 추가
