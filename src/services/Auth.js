// import Storage from '../utils/Storage';
import Storage from "../constant/Storage";

async function getAccount() {
  return Storage.get('account');
}

async function setAccount(data) {
  return Storage.set('account', data);
}

async function getToken() {
  return Storage.get('accessToken');
}

async function setToken(token) {
  return Storage.set('accessToken', token);
}

async function getSaldo() {
  return Storage.get('saldo');
}

async function setSaldo(val) {
  return Storage.set('saldo', val);
}

async function logout() {
  Storage.clear('account');
  Storage.clear('accessToken');
  Storage.clear('saldo');
}

export default {
  logout,
  getAccount,
  setAccount,
  getToken,
  setToken,
  getSaldo,
  setSaldo
};