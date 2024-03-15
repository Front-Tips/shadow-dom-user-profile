export const PROFILE_STYLE = `
.profile {
  padding: 15px;
  width: 320px;
  background-color: #2a493f;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  user-select: none;
  zoom: 0.65;
}

.profile__coverPhoto {
  position: relative;
  background: url(./images/bg.webp);
  background-size: cover;
  height: 180px;
  border-radius: 15px 15px 0 0;
}

.profile__image {
  position: absolute;
  width: 120px;
  bottom: -60px;
  left: 15px;
  border-radius: 50%;
  border: 2px solid #1f322c;
  background: #1f322c;
  padding: 5px;
}

.profile__name {
  font-size: 20px;
  margin: 25px 0 0 145px;
  text-align: left;
  color: #fff;
}

.btn {
  margin: 30px 15px 15px 15px;
  background: #97a410;
  padding: 10px 25px;
  border-radius: 3px;
  border: 1px solid #1f322c;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  color: #fff;
  transition: 0.2s;
}

.btn:last-of-type {
  background: transparent;
  border-color: #fff;
  color: #fff;
}

.btn:hover {
  background-color: #737e0d;
  border-color: #737e0d;
}
`;
