import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridCellParams,
} from '@material-ui/data-grid';
import s from './Users.module.css';

import { DeleteModal } from '../AdminPage/DeleteModal/DeleteModal';
// eslint-disable-next-line import/no-cycle
import { EditModalUser } from '../AdminPage/EditModal/EditModal';
import { AddUserModal } from './AddUser/AddUser';

const Users = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { users } = props.state.usersPage;
  const fields = [
    {
      field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', align: 'center',
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 200,
      headerAlign: 'center',
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 120,
      headerAlign: 'center',
      align: 'center',

    },
    {
      field: 'edit',
      headerName: '    ',
      width: 100,
      sortable: false,

      renderCell: (params: GridCellParams) => {
        const userIndex = users.findIndex((obj) => obj.id === params.id);
        return <EditModalUser user={users[userIndex]} />;
      },
    },
    {
      field: 'delete',
      headerName: '      ',
      width: 120,
      sortable: false,
      // eslint-disable-next-line no-unused-vars
      renderCell: (params: GridCellParams) => {
        const userIndex = users.findIndex((obj) => obj.id === params.id);
        const user = users[userIndex];

        return <DeleteModal item={user} array={users} remove={props.deleteUser} />;
      },
    },
  ];

  return (
    <div className={s.table}>
      <DataGrid
        rows={users}
        columns={fields}
        pageSize={10}
        disableColumnMenu
        autoHeight
        components={{
          Toolbar: function CustomToolbar() {
            return (
              <GridToolbarContainer>
                <GridToolbarFilterButton />
                {/* eslint-disable-next-line react/destructuring-assignment */}
                <AddUserModal addUser={props.addUser} array={users} />
              </GridToolbarContainer>
            );
          },
        }}
      />
    </div>
  );
};

export { Users };
