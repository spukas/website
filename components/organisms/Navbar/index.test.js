import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from './';
import AnimatedBorder from '../../atoms/AnimatedBorder';
import ColStyled from '../../atoms/ColStyled';
import Division from '../../atoms/Division';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Navbar', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const mountWrapper = mountWithContext(<StickyContainer><Navbar /></StickyContainer>);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Navbar component', () => {
    expect(mountWrapper).toBePresent();
  });

  it('renders ColStyled component', () => {
    expect(mountWrapper.find(ColStyled)).toBePresent();
  });

  it('renders Division component', () => {
    expect(mountWrapper.find(Division)).toBePresent();
  });

  it('renders AnimatedBorder component', () => {
    expect(mountWrapper.find(AnimatedBorder)).toBePresent();
  });

  it('renders Sticky component', () => {
    expect(mountWrapper.find(Sticky)).toBePresent();
  });

  it('renders Scroll.Link component with link to Services section', () => {
    expect(mountWrapper.find(Scroll.Link)).toBePresent();
    expect(mountWrapper.find(Scroll.Link).at(0)).toHaveProp('to', 'Service');
  });

  it('renders Scroll.Link component with link to Technologies section', () => {
    expect(mountWrapper.find(Scroll.Link).at(1)).toHaveProp('to', 'Technology');
  });

  it('renders RaisedButton component', () => {
    expect(mountWrapper.find(RaisedButton)).toBePresent();
    expect(mountWrapper.find(RaisedButton)).toHaveProp('label', 'Contact us');
  });
});