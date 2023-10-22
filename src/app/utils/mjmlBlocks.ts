
export interface MJMLBlocks extends Array<MJMLBlock> { }

export interface MJMLBlock {
  name: string;
  mjml: MJML;
  temp?: boolean;
}

export interface MJML {
  tagName: string;
  attributes: any;
  content?: string;
  children?: Child[];
}

interface Child extends MJML { }

export const mjmlBlocks: MJMLBlocks = [
  {
    name: 'Image Block',
    mjml: {
      tagName: 'mj-section',
      attributes: {},
      children: [{
        tagName: 'mj-column',
        attributes: {},
        children: [{
          tagName: 'mj-image',
          attributes: {
            'width': '200px',
            // 'src': '/assets/img/placeholder-image.png',
            'src': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoygrR3g4yGbdNP98j3H0HrAmwTNABdxH-pelJ4nZu25ui_UkIP3C4R4sCbVsesf0An4&usqp=CAU',
            'alt': 'Placeholder Image'
          }
        }]
      }]
    }
  },
  {
    name: 'CTA Button',
    mjml: {
      tagName: 'mj-section',
      attributes: {},
      children: [{
        tagName: 'mj-column',
        attributes: {},
        children: [{
          tagName: 'mj-button',
          attributes: {
            'background-color': '#F45E43',
            'color': '#ffffff',
            'font-family': 'Helvetica',
            'href': 'https://example.com',
            'inner-padding': '15px 30px'
          },
          content: 'Click Me!'
        }]
      }]
    }
  },
  {
    name: 'Text Block',
    mjml: {
      tagName: 'mj-section',
      attributes: {},
      children: [{
        tagName: 'mj-column',
        attributes: {},
        children: [{
          tagName: 'mj-text',
          attributes: {
            'font-size': '16px',
            'color': '#555555',
            'font-family': 'Helvetica'
          },
          content: 'Sample Text'
        }]
      }]
    }
  }

]


export const baseMJMLTemplate: MJML = {
  tagName: 'mjml',
  attributes: {},
  children: [
    {
      tagName: 'mj-body',
      attributes: {},
      children: []
    }
  ]
}
