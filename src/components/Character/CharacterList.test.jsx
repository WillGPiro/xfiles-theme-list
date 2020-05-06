import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList.jsx';

describe('CharacterList component', () => {
  it('matches a snapshot of a CharacterList', () => {
    const wrapper = shallow (<CharacterList
      name="Dana Scully"
      image="https://vignette.wikia.nocookie.net/x-files/images/3/31/Absalom.jpg/revision/latest/scale-to-width-down/310?cb=20070708201919"
      status="alive"
      occupation="FBI Agent"
      portrayedby="Gillian Anderson"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

