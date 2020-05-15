import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget } from '../../components/Widgets';
import '../../resources/scss/exam.scss';
import '../../resources/scss/main.scss';
import ListQuestion from './ListQuestion';

const DetailExam = () => {
    return (
        <MainWidget className={'home-page'}>
            <Header />
            <ListQuestion />
            <Footer />
        </MainWidget>
    );
}

export default DetailExam;
