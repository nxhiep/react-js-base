import {  Typography,  IconButton } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { createStyles,  Theme, withStyles, WithStyles }  from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const styles = (theme: Theme) => 
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            textAlign: "center",
            backgroundColor: "rgb(28, 141, 254)",
            color: "white"
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

export const CommentModal: FunctionComponent<({ 
    handleCloseModal: any,
    open: boolean,
    className?: string
})> = ({ 
    handleCloseModal = () => {},
    open,
    className
}) => {

    return (
        <div>
            <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                Bình luận
                </DialogTitle>
                <MuiDialogContent dividers>
                    <form>
                        <div className={"form-comment"}>
                            <img src={"https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif"} width="40px" className={"avatar"} alt="avatar"/>
                            <div>
                                <input  type="text" placeholder="Bình luận"></input>
                            </div>
                            <IconButton className={"btn-send"}>
                                <SendIcon/>
                            </IconButton>
                        </div>
                    </form>
                </MuiDialogContent>
                <MuiDialogActions>
                    <button onClick={handleCloseModal} className={"btn-close"}>Đóng</button>
                </MuiDialogActions>
            </Dialog>
        </div>	
    );
};

export const NoteModal: FunctionComponent<({ 
    handleCloseModal: any,
    open: boolean,
    className?: string
})> = ({ 
    handleCloseModal = () => {},
    open,
    className
}) => {

    return (
        <div>
            <form>
                <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
                    <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                    Ghi chú
                    </DialogTitle>
                    <MuiDialogContent dividers >
                        <div className={"form-comment"}>
                            <div>
                                <textarea  placeholder="Viết ghi chú"rows={2}></textarea>
                            </div>
                            <button className={"btn-del"}>Xóa</button>
                        </div>
                            
                    </MuiDialogContent>
                    <MuiDialogActions>
                        <button className={"btn-save"}>Lưu</button>
                        <button onClick={handleCloseModal} className={"btn-close"}>Đóng</button>
                    </MuiDialogActions>
                </Dialog>
            </form>
        </div>	
    );
};

export const FeedBackModal: FunctionComponent<({ 
    handleCloseModal: any,
    open: boolean,
    className?: string
})> = ({ 
    handleCloseModal = () => {},
    open,
    className
}) => {

    const [email, setEmail] = useState('lamanhcuong@gmail.com');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    const handleClick = (e:any, title: string, content:string)=> {
        setTitle(title);
        setContent(content);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={open} maxWidth='sm'>
                        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                        Phản hồi
                        </DialogTitle>
                        <MuiDialogContent dividers className={"dialog-content"}>
                            <div className={"form-feedback"}>
                                <div className={"form-container"}>
                                    <label>Email phản hổi</label>
                                    <input  type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <label>Tiêu đề</label>
                                    <input  type="text" placeholder="Tiêu đề" value={title} onChange={e => setTitle(e.target.value)}/>
                                    <label>Nội dung</label>
                                    <textarea  placeholder="Nội dung" rows={2} value={content} onChange={e => setContent(e.target.value)}/>
                                </div>
                                <div className={"feedback-template"} >
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Sai hình ảnh câu hỏi", "Hình ảnh câu hỏi không hiển thị hoặc không liên quan đến câu hỏi")
                                            }>
                                        <p>Sai hình ảnh câu hỏi</p>
                                        <p>Hình ảnh câu hỏi không hiển thị hoặc không liên quan đến câu hỏi</p>
                                    </div>
                                    <div  
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Sai ngữ pháp, sai nội dung câu hỏi", "Câu hỏi báo lặp lại hiển thị, câu hỏi lặp lại ngữ pháp")
                                            }>
                                        <p>Sai ngữ pháp, sai nội dung câu hỏi</p>
                                        <p>Câu hỏi báo lặp lại hiển thị, câu hỏi lặp lại ngữ pháp</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Câu trả lời sai", "Đáp án câu hỏi báo sai")
                                            }>
                                        <p>Câu trả lời sai</p>
                                        <p>Đáp án câu hỏi báo sai</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Câu hỏi không rõ ràng", "Tôi không hiểu câu hỏi là gì")
                                            }>
                                        <p>Câu hỏi không rõ ràng</p>
                                        <p>Tôi không hiểu câu hỏi là gì</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Câu hỏi báo lặp lại nhiều lần", "Câu hỏi lặp đi lặp lại  nhiều lần khi chơi")
                                            }>
                                        <p>Câu hỏi báo lặp lại nhiều lần</p>
                                        <p>Câu hỏi lặp đi lặp lại  nhiều lần khi chơi</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Giải thích đáp án  không rõ ràng", "Tôi không hiểu phần giải thích đáp án câu hỏi")
                                            }>
                                        <p>Giải thích đáp án  không rõ ràng</p>
                                        <p>Tôi không hiểu phần giải thích đáp án câu hỏi</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Câu hỏi spam", "Câu hỏi không liên quan đến chủ đề")
                                            }>
                                        <p>Câu hỏi spam</p>
                                        <p>Câu hỏi không liên quan đến chủ đề</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Câu hỏi không phù hợp", "Câu hỏi quá khó cho người khác")
                                            }>
                                        <p>Câu hỏi không phù hợp</p>
                                        <p>Câu hỏi quá khó cho người khác</p>
                                    </div>
                                    <div 
                                        className={"feedback-template-item"} 
                                        onClick={
                                            e => handleClick(e, "Vấn đề khác", " ")
                                            }>
                                        <p>Vấn đề khác</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </MuiDialogContent>
                        <MuiDialogActions>
                            <button className={"btn-save"}>Gửi</button>
                            <button onClick={handleCloseModal} className={"btn-close"}>Đóng</button>
                        </MuiDialogActions>
                </Dialog>
            </form>
        </div>
    );	    
};