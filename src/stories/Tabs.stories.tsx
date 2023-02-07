import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Tabs } from '../index';

const meta: Meta = {
  title: 'Content Handlers/Tabs',
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
    // @ts-ignore
    <Tabs {...args} />
);

const items = [
  {
    label: 'Item 1',
    renderer: 'tab 1',
  },
  {
    label: 'Item 2',
    renderer: 'tab 2',
  },
  {
    label: 'Item 3',
    renderer: 'tab 3',
  },
  {
    label: 'Item 4',
    renderer: 'tab 4',
  },
];

export const Default = Template.bind({});

Default.args = { items };

export const UnderlineVariant = Template.bind({});

UnderlineVariant.args = { items, variant: 'underline' };

export const WithBadge = Template.bind({});
 
WithBadge.args = {
  // countBadgeProps: {
  //   variant: 'solid',
  //   color: 'shade',
  // },
  items: items.map((i, index) => {
    return {
      ...i,
      count: index * index,
      // countBadgeProps: index == 0 ? { color: 'danger' } : null,
    };
  }),
};

export const Vertical = Template.bind({});

Vertical.args = {
  isVertical: true,
  items,
};

export const VerticalUnderlineVariant = Template.bind({});

VerticalUnderlineVariant.args = {
  variant: 'underline',
  isVertical: true,
  items,
};

export const WithBadgeVertical = Template.bind({});

WithBadgeVertical.args = {
  isVertical: true,
  ...WithBadge.args,
};