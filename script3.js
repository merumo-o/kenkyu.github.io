function question3Screen() {
  return {
    $template: '#Q3S'
  };
}
function question4Screen() {
  return {
    $template: '#Q4S'
  };
}
function question1Screen() {
  return {
    $template: '#Q1S'
  };
}
function funiki1Screen() {
  return {
    $template: '#funiki1S'
  };
}
function funiki2Screen() {
  return {
    $template: '#funiki2S'
  };
}

PetiteVue.createApp({
  // データプロパティ

  screen: 'question1',

  box: '',
  money: '',
  size: '',
  funiki1: '',
  funiki2: '',
  q4: { q4_on: true, q4_off: false },
  q3: { q3_on: false, q3_off: true },
  q1: { q1_on: true, q1_off: true },
  f1: { f1_on: true, f1_off: true },
  f2: { f2_on: true, f2_off: true },
  // ※button要素のためのclassとして「on」と「off」が用意されている（10-ex.css参照）

  toggle() {
    if (this.screen == 'question1') {
      this.q4.q4_on = false;
      this.q4.q4_off = false;
      this.q3.q3_off = false;
      this.q3.q3_on = false;
      this.q1.q1_on = true;
      this.q1.q1_off = true;
    }

    if (this.screen == 'button') {
      this.q4.q4_on = false;
      this.q4.q4_off = true;
      this.q3.q3_off = false;
      this.q3.q3_on = true;
    }

    if (this.screen == 'list') {
      this.q4.q4_on = true;
      this.q4.q4_off = false;
      this.q3.q3_off = true;
      this.q3.q3_on = false;
    }
    if (this.screen == 'funiki1') {
      this.q4.q4_on = true;
      this.q4.q4_off = false;
      this.q3.q3_off = true;
      this.q3.q3_on = false;
      this.q1.q1_on = false;
      this.q1.q1_off = false;
      this.f1.f1_on = true;
      this.f1.f1_off = true;
    }
    if (this.screen == 'funiki2') {
      this.q4.q4_on = true;
      this.q4.q4_off = false;
      this.q3.q3_off = true;
      this.q3.q3_on = false;
      this.q1.q1_on = false;
      this.q1.q1_off = false;
      this.f1.f1_on = false;
      this.f1.f1_off = false;
      this.f2.f2_on = true;
      this.f2.f2_off = true;
    }
  },
  get answer() {
    if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_1' &&
      (this.size === '4' || this.size === '5' || this.size === '6')
    ) {
      return '#anser1'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_1' &&
      this.size === '1'
    ) {
      return '#anser23'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_5' &&
      this.size === '1'
    ) {
      return '#anser30';
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki1 === 'car_4' &&
        this.size === '1') ||
      (this.box === 'cool' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki2 === 'car_5' &&
        this.size === '1')
    ) {
      return '#anser22'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_1' &&
      this.size === '3'
    ) {
      return '#anser3'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      ((this.box === 'cute' || this.box === 'cool') &&
        (this.money === 'normal' || this.money === 'luxury') &&
        (this.funiki1 === 'car_2' || this.funiki2 === 'car_6') &&
        this.size === '3') ||
      (this.box === 'cool' &&
        this.money === 'normal' &&
        this.funiki2 === 'car_6' &&
        this.size === '3')
    ) {
      return '#anser5';
    } else if (
      (this.box === 'cute' || this.box === 'cool') &&
      (this.money === 'normal' || this.money === 'luxury') &&
      (this.funiki1 === 'car_2' || this.funiki2 === 'car_6') &&
      (this.size === '4' || this.size === '5' || this.size === '6')
    ) {
      return '#anser6';
      // 条件が合致する場合はanser1のIDを返す
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki1 === 'car_4' &&
        this.size === '4') ||
      (this.box === 'cool' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki2 === 'car_5' &&
        this.size === '4')
    ) {
      return '#anser7';
      // 条件が合致する場合はanser1のIDを返す
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki1 === 'car_2' &&
        this.size === '2') ||
      (this.box === 'cool' &&
        this.money === 'normal' &&
        this.funiki2 === 'car_6' &&
        this.size === '2')
    ) {
      return '#anser28';
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki1 === 'car_4' &&
        this.size === '6') ||
      (this.box === 'cool' &&
        this.money === 'normal' &&
        this.funiki2 === 'car_5' &&
        this.size === '6')
    ) {
      return '#anser10';
    } else if (
      this.box === 'cool' &&
      this.money === 'luxury' &&
      this.funiki2 === 'car_5' &&
      this.size === '2'
    ) {
      return '#anser16';
    } else if (
      this.box === 'cool' &&
      this.money === 'normal' &&
      this.funiki2 === 'car_5' &&
      this.size === '2'
    ) {
      return '#anser11';
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_4' &&
      this.size === '2'
    ) {
      return '#anser11';
    } else if (
      (this.box === 'cute' || this.box === 'cool') &&
      (this.money === 'normal' || this.money === 'luxury') &&
      (this.funiki1 === 'car_4' || this.funiki2 === 'car_5') &&
      this.size === '3'
    ) {
      return '#anser13';
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_3' &&
      this.size === '3'
    ) {
      return '#anser15';
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_3' &&
      this.size === '6'
    ) {
      return '#anser14';
    } else if (
      this.box === 'cool' &&
      this.money === 'luxury' &&
      (this.funiki2 === 'car_5' || this.funiki2 === 'car_8') &&
      this.size === '6'
    ) {
      return '#anser27';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '6'
    ) {
      return '#anser17';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '2'
    ) {
      return '#anser18';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '5'
    ) {
      return '#anser19';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '3'
    ) {
      return '#anser20';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '4'
    ) {
      return '#anser21';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '3'
    ) {
      return '#anser13';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '4'
    ) {
      return '#anser24';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '6'
    ) {
      return '#anser25';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_7' &&
      this.size === '1'
    ) {
      return '#anser12';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '2'
    ) {
      return '#anser29';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '1'
    ) {
      return '#anser12';
    } else if (
      this.box === 'cool' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki2 === 'car_8' &&
      this.size === '5'
    ) {
      return '#anser14';
    } else if (
      this.box === 'cute' &&
      (this.money === 'normal' || this.money === 'luxury') &&
      this.funiki1 === 'car_3' &&
      (this.size === '4' || this.size === '5')
    ) {
      return '#anser8'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        (this.funiki1 === 'car_1' || this.funiki1 === 'car_2') &&
        this.size === '2') ||
      (this.box === 'cool' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki2 === 'car_6' &&
        this.size === '2')
    ) {
      return '#anser9'; // 条件が合致する場合はanser1のIDを返す
    } else if (
      (this.box === 'cute' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        (this.funiki1 === 'car_1' ||
          this.funiki1 === 'car_3' ||
          this.funiki1 === 'car_2') &&
        (this.size === '1' || this.size === '2')) ||
      (this.box === 'cool' &&
        (this.money === 'normal' || this.money === 'luxury') &&
        this.funiki2 === 'car_6' &&
        this.size === '1')
    ) {
      return '#anser4'; // 条件が合致する場合はanser1のIDを返す
    } else {
      return '#anser2';
    }
  },

  handleBoxChange() {
    if (this.box == 'cute') {
      this.screen = 'funiki1';
    }
    if (this.box == 'cool') {
      this.screen = 'funiki2';
    }
    if (this.funiki1 !== '' || this.funiki2 !== '') {
      this.screen = 'question3';
    }

    if (this.money == 'normal' || this.money == 'luxury') {
      this.screen = 'question4';
    }
    if (this.size !== '') {
      window.location.href = this.answer;
    }
  },
  question3Screen,
  question1Screen,
  funiki1Screen,
  funiki2Screen,
  question4Screen
}).mount();
