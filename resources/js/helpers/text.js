export default {
  methods: {
    stringLowerCase(str) {
      return str.toString().toLowerCase()
    },

    capitalizeFirstLetter(str, lower = false) {
      return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    },

    formatAmount(amount) {
      if (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return '';
    },

    emptyString(charac = '-', length = 4) {
      var str = "";
      for (var i = 0, l = length; i < l; ++i) {
        str += charac
      }
      return str;
    },

    inArray(needle, haystack) {
      var length = haystack.length;
      for (var i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
      }
      return false;
    },

    wholeNumberFormat(amount, decimaPlace) {
      var amountNow = 0
      if ((amount - Math.floor(amount)) !== 0) {
        amountNow = Math.round(amount, decimaPlace);
        if (amountNow === 0) {
          return amount.replace(/\.00$/, '');
        }
        return amountNow.toLocaleString().replace(/\.00$/, '');
      } else {
        amountNow = Math.round(amount, decimaPlace);
        return amountNow.toLocaleString().replace(/\.00$/, '');
      }
    },

    comma_concat(key = 'name', items) {
      let set = '';
      let i = 1;
      items.forEach(ele => {
        set += ele[key];
        if (i < items.length) {
          set += ', ';
        }
        i++
      });

      return set;
    },

    showing_label(from, to, total) {
      let f = this.to_strong(from)
      let t = this.to_strong(to)
      let tot = this.to_strong(total)
      return `Showing ${f} to ${t} of ${tot} results`;
    },

    to_strong(str) {
      return `<strong>${str}</strong>`;
    }
  },
};

