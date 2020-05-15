import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import { TableContainer } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import { TitleBlock, MainWidget } from '../../components/Widgets';


interface Column {
    id: 'no' | 'name' | 'date' | 'score' | 'duration';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: 'no', label: 'STT', minWidth: 30 },
    { id: 'name', label: 'Họ tên', minWidth: 100 },
    {
      id: 'date',
      label: 'Ngày thi',
      minWidth: 90,
      align: 'left',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'score',
      label: 'Kết quả',
      minWidth: 90,
      align: 'left',
    },
    {
      id: 'duration',
      label: 'Thời gian',
      minWidth: 90,
      align: 'left',
    },
  ];
  
  interface Candidate {
    name: string;
    date: string;
    score: string;
    duration: string;
  }
  
  function createData(name: string, date: string, score: string, duration: string): Candidate {
    return { name, date, score, duration };
  }
  
  var candidates = [
    createData('Huỳnh Nguyệt', '29-09-2019', '10/10', '5m:00s'),
    createData('Nguyễn Ngọc Tuấn', '10-02-2020', '10/10', '3m:19s'),
    createData('Trịnh Diệu Linh', '05-02-2020', '06/10', '4m:47s    '),
    createData('Đặng Thị Thu Hà', '28-03-2020', '10/10', '4m:57s'),
    createData('Đoàn Hồng Trúc', '08-10-2019', '10/10', '4m:29s'),
    createData('Nguyễn Nhật Mai', '18-03-2020', '10/10', '4m:7s'),
    createData('Nguyễn Thị Sâm', '07-04-2020', '10/10', '4m:41s'),
    createData('Phạm Quân Bảo', '22-04-2020', '10/10', '5m:0s'),
    createData('Nguyễn Thị Thanh Ly', '21-08-2019', '10/10', '4m:6s'),
    createData('Nguyễn Thị Hương Trà', '07-08-2019', '10/10', '4m:56s'),
    createData('Trần Thanh Tuấn', '12-11-2019', '05/10', '2m:28s'),
    createData('Nguyễn Thị Thuý Hằng', '10-05-2020', '04/10', '4m:48s'),
    createData('Nguyễn Thị Thu Hương', '05-05-2020', '03/10', '4m:25s'),
    createData('Bùi Thị Mỹ Hạnh', '03-05-2020', '09/10', '4m:49s'),
    createData('Kim Ngọc Thúy', '02-05-2020', '08/10', '4m:46s'),
  ];
  
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    borderAround: {
        border: '1px solid #ddd',
        margin: '5px 0',
    },
    margin: {
        margin: theme.spacing(1),
      },
  }));

  const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

  const RankExam: FunctionComponent<({
    })> = () => {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [typeSort, setTypeSort] = React.useState(0);
    var no = page === 0 ? 1 : (page*rowsPerPage + 1);
    const _ = require('lodash');

    let check = typeSort.toString();
    switch (check) {
      case '1':
        candidates = _.orderBy(candidates, ['score'], ['asc']);
        break;
        
      case '2':
        candidates = _.orderBy(candidates, ['date'], ['desc']);
        break;

      case '3':
        candidates = _.orderBy(candidates, ['date'], ['asc']);
        break;

      default:
        candidates = _.orderBy(candidates, ['score'], ['desc']);
        break;
    }

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleChangeTypeSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTypeSort(event.target.value as number);
    }; 
  
    return (
        <Paper className='custom-block-panel'>
          <TitleBlock title='Bảng xếp hạng' />
          <MainWidget className={"content-block-panel"}>
              <Paper className={classes.root}>
                  <FormControl className={classes.margin}>
                      <NativeSelect
                      id="demo-customized-select-native"
                      value={typeSort}
                      onChange={handleChangeTypeSort}
                      input={<BootstrapInput />}
                      >
                      <option value={0}>Sắp xếp theo điểm cao nhất</option>
                      <option value={1}>Sắp xếp theo điểm thấp nhất</option>
                      <option value={2}>Sắp xếp theo thời gian mới nhất</option>
                      <option value={3}>Sắp xếp theo thời gian cũ nhất</option>
                      </NativeSelect>
                  </FormControl>
                  <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                            ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {candidates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((candidate) => {
                          return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={no}>
                              {columns.map((column) => {
                                  let value;
                                  if( column.id === 'no'){
                                      value = no;
                                      no++;
                                  }else{
                                      value = candidate[column.id];
                                  }
                              return (
                                  <TableCell key={column.id} align={column.align}>
                                  { value }
                                  </TableCell>
                              );
                              })}
                          </TableRow>
                          );
                      })}
                      </TableBody>
                  </Table>
                  <TablePagination
                  rowsPerPageOptions={[15, 30, 50, 100, 150, 300, 500]}
                  component="div"
                  count={candidates.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  labelRowsPerPage="Hiển thị số dòng"
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
              </Paper>
          </MainWidget>
        </Paper>
    );
  }

export default RankExam;