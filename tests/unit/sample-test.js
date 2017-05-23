import { moduleFor, test } from 'ember-qunit';

const myUtil = {
    red: 'red'
};

moduleFor('Unit | Utility | sample', { unit: true });

test("returns the right color", function (assert) {
    assert.equal(myUtil.red, "red", "Expected red");
});