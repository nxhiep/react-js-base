import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, fade, makeStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import { Link, Container } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InputAdornment from '@material-ui/core/InputAdornment';

import Logo from '../resources/images/logo.jpg';
import VietNamFlag from '../resources/images/vietnam-flag-resize.png';
import EnglandFlag from '../resources/images/england-flag-resize.png';
import { FixedContainer } from './Widgets';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		headerInforContact: {
			backgroundColor: '#c21b17',
			color: '#fff',
			minHeight: 40,
			width: '100vw',
		},
		headerMenu: {
			backgroundColor: '#fff',
			color: '#C21b17',
			width: '100vw',
		},
		menuTopItem: {
			fontSize: 18,
			color: '#c21b17',
			padding:  theme.spacing(0,2),
		},
		menuTop: {
			display: 'flex',
			margin: theme.spacing(0,0,0,7),
			alignItems: 'center',
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			border: '1px solid',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(3),
				width: 'auto',
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '30ch',
			},
		},
		sectionDesktop: {
			display: 'none',
			alignItems: 'center',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		sectionMobile: {
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		displayFlex: {
			display: 'flex',
			flexGrow: 1,
			alignItems: 'center',
		},
		activeCourse: {
			border: '1px solid',
			borderRadius: theme.spacing(3, 0, 3, 0),
			padding: '5px 20px',
		},
		popper: {
			zIndex: 9999,
		},
		inputLogin: {
			width: '100%',
			margin: '15px 0',
		},
		divBtnLogin: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		btnV1: {
			background: '#ffb400',
			padding: '10px 115px',
			borderRadius: '50px 0 50px 50px',
			margin: '1.5rem 0',
			fontSize: 14,
			color: '#fff',
		},
		btnLoginFB: {
			background: '#3a549e',
			padding: '10px 35px',
			borderRadius: '50px 0 50px 50px',
			margin: '1.5rem 0',
			fontSize: 14,
			color: '#fff',
		},
		inputRegister: {
			margin: '15px 0',
			width: '95%',
		},
		labelRoot: {
			transform: 'translate(14px, 15px) scale(1)',
		},
		inputRegisterRoot: {
			padding: '12.5px 10px',
		}
		
	}),
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Header() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
  	const anchorRef = React.useRef<HTMLButtonElement>(null);	

	const [openLoginModal, setOpenLoginModal] = React.useState(false);
	const [openRegisterModal, setOpenRegisterModal] = React.useState(false);

	const handleClickOpenLoginModal = () => {
		setOpenLoginModal(true);
		setOpenRegisterModal(false);
	};
	const handleCloseLoginModal = () => {
		setOpenLoginModal(false);
	};
	const handleClickOpenRegisterModal = () => {
		setOpenRegisterModal(true);
		setOpenLoginModal(false);
	};
	const handleCloseRegisterModal = () => {
		setOpenRegisterModal(false);
	};
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	  };
	
	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	const renderLoginModal = (
		<div>
			<Dialog onClose={handleCloseLoginModal} aria-labelledby="customized-dialog-title" open={openLoginModal} maxWidth='lg'>
				<DialogTitle id="customized-dialog-title" onClose={handleCloseLoginModal}>
				Đăng nhập
				</DialogTitle>
				<DialogContent dividers>
					<div>
						<TextField
							id="outlined-secondary"
							label="Tên đăng nhập(*)"
							variant="outlined"
							color="secondary"
							className={classes.inputLogin}
						/>
						<TextField
							id="outlined-secondary"
							label="Mật khẩu(*)"
							variant="outlined"
							color="secondary"
							className={classes.inputLogin}
						/>

						<Link href='/' >Quên mậu khẩu</Link>
						<div className={classes.divBtnLogin}>
							<Button className={classes.btnV1}>
								Đăng nhập
							</Button>
							<Typography>
								Hoặc đăng nhập bằng
							</Typography>
							<IconButton className={classes.btnLoginFB}>
								<FacebookIcon/> Facebook
							</IconButton>
							<Typography>
								Không có tài khoản <Link onClick={handleClickOpenRegisterModal} >đăng ký ngay</Link>
							</Typography>
						</div>
					</div>
				</DialogContent>
				<DialogActions>
				
				</DialogActions>
			</Dialog>
		</div>	
	);

	const renderRegisterModal = (
		<div>
			<Dialog onClose={handleCloseRegisterModal} aria-labelledby="customized-dialog-title" open={openRegisterModal} maxWidth='md'>
				<DialogTitle id="customized-dialog-title" onClose={handleCloseRegisterModal}>
				Đăng ký
				</DialogTitle>
				<DialogContent dividers>
					<div>
						<div style={{display: 'flex'}}>
							<div style={{padding: '5px'}}>
								<Typography>1. Thông tin cá nhân</Typography>
								<TextField
									id="outlined-secondary"
									label="Họ tên(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>
								<TextField
									id="outlined-secondary"
									label="Email(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>

								<TextField
									id="outlined-secondary"
									label="Số điện thoại(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}

								/>
								<TextField
									id="outlined-secondary"
									label="Tỉnh thành"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>
							</div>
							<div style={{padding: '5px'}}>
								<Typography>2. Thông tin tài khoản</Typography>
								<TextField
									id="outlined-secondary"
									label="Tài khoản đăng nhập(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>
								<TextField
									id="outlined-secondary"
									label="Mật khẩu(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>

								<TextField
									id="outlined-secondary"
									label="Xác nhận mật khẩu(*)"
									variant="outlined"
									color="secondary"
									className={classes.inputRegister}
									InputLabelProps={{
										classes: {
										  root: classes.labelRoot,
										}
									  }}
									InputProps={{
										classes: {
											input: classes.inputRegisterRoot,
										}
									}}
								/>
							</div>
						</div>
						<div className={classes.divBtnLogin}>
							<Button className={classes.btnV1}>
								Đăng nhập
							</Button>
							<Typography>
								Hoặc đăng nhập bằng
							</Typography>
							<IconButton className={classes.btnLoginFB}>
								<FacebookIcon/> Facebook
							</IconButton>
							<Typography>
								Không có tài khoản <Link onClick={handleClickOpenLoginModal}>Đăng nhập ngay</Link>
							</Typography>
						</div>
					</div>
				</DialogContent>
				<DialogActions>
				
				</DialogActions>
			</Dialog>
		</div>	
	);

	const renderLanguage = (
		<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition className={classes.popper}>
		{({ TransitionProps, placement }) => (
		  <Grow
			{...TransitionProps}
			style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
		  >
			<Paper>
			  <ClickAwayListener onClickAway={handleClose}>
				<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
				  <MenuItem onClick={handleClose}>Vietname</MenuItem>
				  <MenuItem onClick={handleClose}>English</MenuItem>
				</MenuList>
			  </ClickAwayListener>
			</Paper>
		  </Grow>
		)}
	  </Popper>
	);

	return (
		<AppBar position="fixed">
			<div className={classes.headerInforContact}>
				<Container className={classes.displayFlex} >
						<div className={classes.displayFlex}>
							<div  className={'contact-infor'}>
								<PhoneIcon className={'icon'}/>
								<Link href="/">
										Hotline: 0989924488
								</Link>
							</div>
							<div  className={'contact-infor'}>
								<MailIcon className={'icon'}/>
								<Link href="/" >
										Email: hotrokythuat.ngoaingu24h@gmail.com
								</Link>
							</div>
							<div className={'contact-infor'}>
								<LanguageIcon className={'icon'}/>
								Ngôn ngữ 
								<Button
									ref={anchorRef}
									aria-controls={open ? 'menu-list-grow' : undefined}
									aria-haspopup="true"
									onClick={handleToggle}
									color='inherit'
								>
									<img src={1 ? VietNamFlag : EnglandFlag} width="30px" alt="flag"/>
									<ArrowDropDownIcon/>
								</Button>									
							</div>
							
						</div>	
						<div className={classes.sectionDesktop}>
							<Link href="/" className={'contact-infor'} >
								<Typography className={'icon'} >
									Mua khóa học
								</Typography>
							</Link>
							<Tooltip title="Xem giỏ hàng">
								<IconButton aria-label="show 4 new mails" color="inherit">
									<Badge badgeContent={4} color="secondary">
										<ShoppingCartIcon />
									</Badge>
								</IconButton>																																				
							</Tooltip>
							<Tooltip title="Thông báo">
								<IconButton aria-label="show 17 new notifications" color="inherit">
									<Badge badgeContent={17} color="secondary">
										<NotificationsIcon />
									</Badge>
								</IconButton>
							</Tooltip>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-haspopup="true"
								onClick={handleClickOpenLoginModal}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
				</Container>
			</div>
			<div className={classes.headerMenu}>
				<FixedContainer>
					<Toolbar  >
					<Link href="/" className={'logo-web'}>
						<img alt="" src={Logo} />
					</Link>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.menuTop}>
						<Link href="/" className={classes.menuTopItem}>
							Trang chủ
						</Link>
						<Link href="/" className={classes.menuTopItem}>
							Khóa học
						</Link>
						<Link href="/" className={classes.menuTopItem}>
							Tin tức
						</Link>
						<Link href="/" className={classes.menuTopItem}>
							Liên hệ
						</Link>
						<Link href="/" className={[classes.activeCourse, classes.menuTopItem].join(' ')}>
							Kích hoạt khóa  học
						</Link>
					</div>
				</Toolbar>
				</FixedContainer>
			</div>
			{renderLanguage}
			{renderRegisterModal}
			{renderLoginModal}
		</AppBar>
			
	);
}