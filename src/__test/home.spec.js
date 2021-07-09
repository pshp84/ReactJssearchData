import { mount } from 'enzyme';
import { findByTestAtrr } from "../testUtills";
import HommeWrapper from '../home/home';

const dataSource = [
    {
        login: "klklkl",
        id: 20381503,
        node_id: "MDQ6VXNlcjIwMzgxNTAz",
        avatar_url: "https://avatars.githubusercontent.com/u/20381503?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jhjhk",
        html_url: "https://github.com/jhjhk",
        followers_url: "https://api.github.com/users/jhjhk/followers",
        following_url: "https://api.github.com/users/jhjhk/following{/other_user}",
        gists_url: "https://api.github.com/users/jhjhk/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jhjhk/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jhjhk/subscriptions",
        organizations_url: "https://api.github.com/users/jhjhk/orgs",
        repos_url: "https://api.github.com/users/jhjhk/repos",
        events_url: "https://api.github.com/users/jhjhk/events{/privacy}",
        received_events_url: "https://api.github.com/users/jhjhk/received_events",
        type: "User",
        site_admin: false,
        score: 1
    },
    {
        login: "jhjhkim23",
        id: 12120098,
        node_id: "MDQ6VXNlcjEyMTIwMDk4",
        avatar_url: "https://avatars.githubusercontent.com/u/12120098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jhjhkim23",
        html_url: "https://github.com/jhjhkim23",
        followers_url: "https://api.github.com/users/jhjhkim23/followers",
        following_url: "https://api.github.com/users/jhjhkim23/following{/other_user}",
        gists_url: "https://api.github.com/users/jhjhkim23/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jhjhkim23/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jhjhkim23/subscriptions",
        organizations_url: "https://api.github.com/users/jhjhkim23/orgs",
        repos_url: "https://api.github.com/users/jhjhkim23/repos",
        events_url: "https://api.github.com/users/jhjhkim23/events{/privacy}",
        received_events_url: "https://api.github.com/users/jhjhkim23/received_events",
        type: "User",
        site_admin: false,
        score: 1
    },
]
const sortingArr = [
    {
        login: "jhjhkim23",
        id: 12120098,
        node_id: "MDQ6VXNlcjEyMTIwMDk4",
        avatar_url: "https://avatars.githubusercontent.com/u/12120098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jhjhkim23",
        html_url: "https://github.com/jhjhkim23",
        followers_url: "https://api.github.com/users/jhjhkim23/followers",
        following_url: "https://api.github.com/users/jhjhkim23/following{/other_user}",
        gists_url: "https://api.github.com/users/jhjhkim23/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jhjhkim23/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jhjhkim23/subscriptions",
        organizations_url: "https://api.github.com/users/jhjhkim23/orgs",
        repos_url: "https://api.github.com/users/jhjhkim23/repos",
        events_url: "https://api.github.com/users/jhjhkim23/events{/privacy}",
        received_events_url: "https://api.github.com/users/jhjhkim23/received_events",
        type: "User",
        site_admin: false,
        score: 1
    },
    {
        login: "klklkl",
        id: 20381503,
        node_id: "MDQ6VXNlcjIwMzgxNTAz",
        avatar_url: "https://avatars.githubusercontent.com/u/20381503?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jhjhk",
        html_url: "https://github.com/jhjhk",
        followers_url: "https://api.github.com/users/jhjhk/followers",
        following_url: "https://api.github.com/users/jhjhk/following{/other_user}",
        gists_url: "https://api.github.com/users/jhjhk/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jhjhk/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jhjhk/subscriptions",
        organizations_url: "https://api.github.com/users/jhjhk/orgs",
        repos_url: "https://api.github.com/users/jhjhk/repos",
        events_url: "https://api.github.com/users/jhjhk/events{/privacy}",
        received_events_url: "https://api.github.com/users/jhjhk/received_events",
        type: "User",
        site_admin: false,
        score: 1
    }
]

global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

const setUp = (props) => {
    const component = mount(
        <HommeWrapper {...props} />
    );
    component.debug();
    return component;
}

describe('Home Component', () => {
    it('Should render without errors', () => {
        const wrapper = setUp();
        const h = findByTestAtrr(wrapper, 'homeComponent');
        expect(h.length).toBe(1);
    });
});
const initialProps  = {
    finalSave: jest.fn().mockImplementation(() => Promise.resolve())
}
describe('Fetch data', () => {
    let wrapper;
    const initial = {
        incomplete_results: false,
        items: dataSource,
        total_count: 6
    }
    beforeEach(() => {
        wrapper = setUp(initial);
    });
    it('Should render table data', () => {
        const h = findByTestAtrr(wrapper, 'itemTable');
        expect(h.length).toBe(1);
    });
    it('Click on Submit', () => {
        const h = findByTestAtrr(wrapper, 'submitButn');
        h.find('button').simulate('click', 'Test');
        // expect(initialProps).toHaveBeenCalled();
    });
    it('Search Functionality', () => {
        const h = findByTestAtrr(wrapper, 'searchInput');
        h.find('input').simulate('change', { target: { value: 'login' } });
    });
})