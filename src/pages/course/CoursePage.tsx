import React, { useEffect, FunctionComponent } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { AppState } from '../../redux/appstate';
import * as topicAction from '../../redux/actions/topic';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget, FixedContainer } from '../../components/Widgets';
import '../../resources/scss/about.scss';
import '../../resources/scss/main.scss';
const CoursePage: FunctionComponent<{
  fetchTopicByParentId: Function;
  location: any;
}> = ({ fetchTopicByParentId, location }) => {
  useEffect(() => {
    if (location.search) {
      const parsed = queryString.parse(location.search);
      if (parsed.parentId) fetchTopicByParentId(parsed.parentId);
    }
  }, []);

  return (
    <MainWidget className={'about-page'}>
      <Header />
      <FixedContainer>
        <h1>That is course page</h1>
      </FixedContainer>
      <Footer />
    </MainWidget>
  );
};

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
    topicState: state.topicState,
    ...ownProps
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchTopicByParentId: (parentId: number) =>
    dispatch(topicAction.fetchTopicByParentId(parentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
