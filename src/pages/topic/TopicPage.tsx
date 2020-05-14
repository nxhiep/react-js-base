import React, { useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/appstate';
import * as courseAction from '../../redux/actions/course';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget, FixedContainer } from '../../components/Widgets';
import '../../resources/scss/about.scss';
import '../../resources/scss/main.scss';
const TopicPage: FunctionComponent<{
  fetchCourseByCategoryId: Function;
}> = ({ fetchCourseByCategoryId }) => {
  useEffect(() => {
    fetchCourseByCategoryId(5639651486334976);
  }, []);

  return (
    <MainWidget className={'about-page'}>
      <Header />
      <FixedContainer>
        <h1>That is topic page</h1>
      </FixedContainer>
      <Footer />
    </MainWidget>
  );
};

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
    courseState: state.courseState,
    ...ownProps
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchCourseByCategoryId: (categoryId: number) =>
    dispatch(courseAction.fetchCourseByCategoryId(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
