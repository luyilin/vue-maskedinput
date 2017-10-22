<template>
  <div id="app">
    <div class="wrap">
      <h1>Vue masked input</h1>
      <h2>A Vue component which creates a masked  &lt;input/&gt;</h2>
      <ul>
        <li>
          <label>Card Number: </label>
          <masked-input pattern="1111 1111 1111 1111"></masked-input>
        </li>
        <li>
          <label>Date: </label>
          <masked-input pattern="1111/11/11" placeholder="yyyy/mm/dd"></masked-input>
        </li>
        <li>
          <label>Phone: </label>
          <masked-input pattern="111 1111 1111"></masked-input>
        </li>
        <li>
          <label>License Plate: </label>
          <masked-input pattern="A 11111" placeholder="A 11111"></masked-input>
        </li>
        <li>
          <label>Escaped: </label>
          <masked-input pattern="11 \* 11"></masked-input>
        </li>
        <li>
          <label>Leading: </label>
          <masked-input pattern="(1) 111 1111"></masked-input>
        </li>
        <li>
          <label>Mix: </label>
          <masked-input pattern="11-WW-1111" placeholder="11-WW-1111"></masked-input>
        </li>
        <li>
          <select v-model="pattern">
            <option disabled value="">Pattern: </option>
            <option>1111 1111</option>
            <option>111 111</option>
            <option>11 11</option>
          </select>
          <masked-input :pattern="pattern"></masked-input>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MaskedInput from '../src'

export default {
  components: {
    MaskedInput
  },

  data() {
    return {
      pattern: '1111 1111'
    }
  }
}
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
  }
  body, html, #app {
    height: 100%;
  }
  #app {
    background-color: #f8f8f8;
  }
  .wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: #6ea5d4;
  }
  h2 {
    font-size: 18px;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #6ea5d4;
    padding: 8px 16px 3px;
    font-size: 20px;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 20px;
  }
  label {
    margin-right: 20px;
    vertical-align: -webkit-baseline-middle;
  }
</style>
