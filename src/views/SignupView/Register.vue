<template>
  <div class="step-5 step">
    <h3>Let's kick off your project!</h3>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="first_name" class="pull-left">First Name</label
          ><input
            type="text"
            class="form-control"
            placeholder="Enter your First name"
            name="first_name"
          />
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="last_name" class="pull-left">Last Name</label
          ><input
            type="text"
            class="form-control"
            placeholder="Enter your Last name"
            name="first_name"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="email" class="pull-left">Company email</label
          ><input
            type="email"
            class="form-control"
            placeholder="Enter your company email"
            name="email"
          />
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="form-group">
          <label for="number" class="pull-left">Phone Number (Optional)</label
          ><input
            type="text"
            class="form-control"
            placeholder="72 345 678"
            name="number"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.step-5 {
  .row {
    margin-top: 35px;

    .form-group {
      label {
        font-size: 14px;
        line-height: 18px;
        padding-bottom: 8px;
        display: block;
        font-weight: 700;
        margin-bottom: 0;
      }

      .form-control {
        color: #555;
        height: 48px;
        font-size: 13px;
        border: 1px solid #e6e6ed;
        border-radius: 0.25rem;

        &:focus {
          border-color: #a9a9a9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}
</style>
