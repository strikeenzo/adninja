import { handleActions } from 'redux-actions';
import {
  AD_GET_REQUEST,
  AD_GET_SUCCESS,
  AD_GET_ERROR,
  AD_CREATE_REQUEST,
  AD_CREATE_SUCCESS,
  AD_CREATE_ERROR,
  AD_EDIT_REQUEST,
  AD_EDIT_SUCCESS,
  AD_EDIT_ERROR,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_LIST_ERROR,
} from './actions';

export const initialState = {
  ad: null,
  adList: [],
  creating: false,
  editing: false,
  listLoading: false,
  loading: false
};

export default handleActions({
  [AD_GET_REQUEST]: (state) => ({
    ...state,
    ad: null,
    loading: true
  }),
  [AD_GET_SUCCESS]: (state, action) => ({
    ...state,
    ad: action.payload,
    loading: false
  }),
  [AD_GET_ERROR]: (state) => ({
    ...state,
    loading: false
  }),
  [AD_CREATE_REQUEST]: (state) => ({
    ...state,
    creating: true
  }),
  [AD_CREATE_SUCCESS]: (state, action) => ({
    ...state,
    ad: action.payload,
    creating: false
  }),
  [AD_CREATE_ERROR]: (state) => ({
    ...state,
    creating: false
  }),
  [AD_EDIT_REQUEST]: (state) => ({
    ...state,
    editing: true
  }),
  [AD_EDIT_SUCCESS]: (state, action) => ({
    ...state,
    ad: action.payload,
    editing: false
  }),
  [AD_EDIT_ERROR]: (state) => ({
    ...state,
    editing: false
  }),
  [AD_LIST_REQUEST]: (state) => ({
    ...state,
    adList: [],
    listLoading: true
  }),
  [AD_LIST_SUCCESS]: (state, action) => ({
    ...state,
    adList: action.payload,
    listLoading: false
  }),
  [AD_LIST_ERROR]: (state) => ({
    ...state,
    listLoading: false
  })
}, initialState);
