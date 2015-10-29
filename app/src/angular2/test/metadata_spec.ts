import {
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xdescribe,
  xit,
} from 'angular2/testing_internal';

import {Component, View} from 'angular2/angular2';
import {getComponentInfo, parseFields} from 'upgrade/src/metadata';

export function main() {
  describe('upgrade metadata', () => {
    it('should extract component selector', () => {
      expect(getComponentInfo(ElementNameComponent).selector).toEqual('elementNameDashed');
    });


    describe('errors', () => {
      it('should throw on missing selector', () => {
        expect(() => getComponentInfo(AttributeNameComponent))
            .toThrowErrorWith(
                "Only selectors matching element names are supported, got: [attr-name]");
      });

      it('should throw on non element names', () => {
        expect(() => getComponentInfo(NoAnnotationComponent))
            .toThrowErrorWith("No Directive annotation found on NoAnnotationComponent");
      });
    });

    describe('parseFields', () => {
      it('should process nulls', () => { expect(parseFields(null)).toEqual([]); });

      it('should process values', () => {
        expect(parseFields([' name ', ' prop :  attr ']))
            .toEqual([
              {
                prop: 'name',
                attr: 'name',
                bracketAttr: '[name]',
                parenAttr: '(name)',
                bracketParenAttr: '[(name)]',
                onAttr: 'onName',
                bindAttr: 'bindName',
                bindonAttr: 'bindonName'
              },
              {
                prop: 'prop',
                attr: 'attr',
                bracketAttr: '[attr]',
                parenAttr: '(attr)',
                bracketParenAttr: '[(attr)]',
                onAttr: 'onAttr',
                bindAttr: 'bindAttr',
                bindonAttr: 'bindonAttr'
              }
            ]);
      });
    })
  });
}

@Component({selector: 'element-name-dashed'})
@View({template: ``})
class ElementNameComponent {
}

@Component({selector: '[attr-name]'})
@View({template: ``})
class AttributeNameComponent {
}

class NoAnnotationComponent {}
