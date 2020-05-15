import { Grid, Link, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { FunctionComponent } from 'react';
import { FixedContainer } from './Widgets';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        iconColor: {
            color: '#fed447',
            fontSize: 30,
        },
        footer : {
            marginTop:"auto", 
            backgroundColor: '#242a37',
            paddingTop: 30,
        },
        textYellow: {
            color: '#fed447',
        },
        footerList: {
            color: '#ddd',
            display: 'flex',
            flexDirection: 'column',
        },
        footerLink: {
            color: '#ddd',
        },
        title: {
            fontWeight: "bold",
        },
    })
);
const Footer: FunctionComponent<({})> = () => {
    const classes = useStyle();
    return (
        <footer className={ classes.footer}>
            <FixedContainer>
                <div className={'footer-content'}>
                    <Grid container direction="row" alignItems="center" justify="space-between">
                       <Grid item md={6} sm={12} className={classes.textYellow}>
                            <Typography paragraph>
                                <LocationOnIcon className={classes.iconColor}></LocationOnIcon>Tầng 5, Số 52 Chùa Hà, Quan Hoa, Cầu Giấy, Hà Nội
                            </Typography>
                            <Typography paragraph>
                                <MailIcon className={classes.iconColor}></MailIcon>hotrokythuat.ngoaingu24h@gmail.com
                            </Typography>
                            <Typography>
                                <PhoneIcon className={classes.iconColor}></PhoneIcon>0989924488
                            </Typography>
                            <Typography>Công ty Cổ phần Đào tạo Ngoại Ngữ 24h</Typography>
                            <Typography>MST 0104609075 </Typography>
                            <Typography>Đăng ký lần đầu ngày 26/04/2010 do Sở kế hoạch và đầu tư Thành phố Hà Nội cấp</Typography>
                       </Grid>
                       <Grid item md={3} sm={12}className={classes.footerList}>
                            <Typography noWrap className={[classes.textYellow, classes.title].join(' ')}> 
                                TIỆN ÍCH
                            </Typography>
                            <Link href="/" >Trang chủ</Link>
                            <Link href="/" >Giới thiệu</Link>
                            <Link href="/" >Khóa học</Link>
                            <Link href="/" >Tin tức</Link>
                            <Link href="/" >Liên hệ</Link>
                       </Grid>
                       <Grid item md={3} sm={12} className={classes.footerList}>
                            <Typography noWrap className={[classes.textYellow, classes.title].join(' ')}>
                                TIỆN ÍCH
                            </Typography>
                            <Link href="/" >Chính sách chung</Link>
                            <Link href="/" >Chính sách bảo mật thông tin</Link>
                            <Link href="/" >Hướng dẫn mua hàng</Link>
                            <Link href="/" >Hướng dẫn kích hoạt khóa học</Link>
                            <Link href="/" >Chính sách hoàn trả học phí</Link>
                       </Grid>
                    </Grid>
                </div>
            </FixedContainer>
        </footer>
    );
}

export default Footer;