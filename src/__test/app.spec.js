import { mount } from 'enzyme';
import { findByTestAtrr } from "../testUtills";
import App from "../App";

global.matchMedia = global.matchMedia || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const setUp = () => {
    const component = mount(
        <App />
    );
    component.debug();
    return component;
}

describe('App Component', () => {
    it('Should render without errors', () => {
        const wrapper = setUp();
        const h = findByTestAtrr(wrapper, 'appComponent');
        expect(h.length).toBe(1);
    });
})