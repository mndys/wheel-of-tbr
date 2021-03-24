import React from 'react'
import PromptSpecifier from '../components/PromptSpecifier'
import Prompt from '../components/Prompt'

export default {
  title: 'ui/Prompt',
  component: Prompt,
  argTypes: {},
}

const Template = args => (
  <Prompt {...args}>
    {args.text}
    {args.colorObject ? (
      <PromptSpecifier
        colorObject={{
          name: 'Japanese Carmine',
          hex: '#9D2933',
        }}
        triggerPrompt="Cover Colour"
      />
    ) : (
      ''
    )}
  </Prompt>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Go fish!',
}

export const ColorPrompt = Template.bind({})
ColorPrompt.args = {
  text: 'Cover Colour',
  prompts: [
    {
      option: 'Cover Colour',
      info:
        'Read a book with this colour on the cover, spine, or in the title:',
    },
  ],
  calculateCurrentPromptNumber: 0,
  colorObject: {
    name: 'Japanese Carmine',
    hex: '#9D2933',
  },
}
