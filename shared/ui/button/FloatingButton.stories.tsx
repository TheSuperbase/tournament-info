import type { Meta, StoryObj } from '@storybook/react'

import FloatingButton from './FloatingButton'
import { BUTTON_SIZE, BUTTON_VARIANT } from './variants'
import Icon from '../icon'

const meta: Meta<typeof FloatingButton> = {
  title: 'Atoms/Button/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button is a UI component that triggers an action when clicked or tapped. It can have different styles, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-24 w-24">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: [BUTTON_VARIANT.PRIMARY],
      description: '버튼의 스타일 변형할 때 사용하는 변수입니다',
    },
    size: {
      control: 'select',
      options: [BUTTON_SIZE.MEDIUM],
      description: '버튼의 크기를 선택할 때 사용하는 변수입니다',
    },
    children: {
      description: '주로 Icon 컴포넌트를 입력받습니다.',
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
  render: () => (
    <FloatingButton variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.MEDIUM}>
      <Icon name={'CloseOutlinedBlack'} width={20} height={20} />
    </FloatingButton>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FloatingButton variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.MEDIUM} disabled>
      <Icon name={'CloseOutlinedBlack'} width={20} height={20} />
    </FloatingButton>
  ),
}
