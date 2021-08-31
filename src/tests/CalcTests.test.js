import { expect, it } from "@jest/globals"
import { mount } from "@vue/test-utils"


import Calculator from "../components/Calculator"

describe('Calculator Inputs test', () => {
   it('Test operand 1 input value', () => {
      const wrapper = mount(Calculator)
      const op1 = wrapper.find('input.operand1')
      op1.setValue('1')

      expect(wrapper.vm.operand1).toBe(1)
   })

   it('Test operand 2 input value', () => {
      const wrapper = mount(Calculator)
      const op2 = wrapper.find('input.operand2')
      op2.setValue('2')

      expect(wrapper.vm.operand2).toBe(2)
   })
})

describe('Calculator operations test', () => {
   it('SUM method test', () => {
      const wrapper = mount(Calculator)
      const op1 = wrapper.find('input.operand1')
      op1.setValue('1')
      const op2 = wrapper.find('input.operand2')
      op2.setValue('2')

      const operation = wrapper.find('button[name="+"]')
      operation.trigger('click')

      expect(wrapper.vm.result).toBe(3)
   })

   it('SUB method test', () => {
      const wrapper = mount(Calculator)
      const op1 = wrapper.find('input.operand1')
      op1.setValue('2')
      const op2 = wrapper.find('input.operand2')
      op2.setValue('1')

      const operation = wrapper.find('button[name="-"]')
      operation.trigger('click')

      expect(wrapper.vm.result).toBe(1)
   })

   it('MULT method test', () => {
      const wrapper = mount(Calculator)
      const op1 = wrapper.find('input.operand1')
      // op1.setValue('2')
      op1.element.value = '2'
      op1.trigger('input')
      const op2 = wrapper.find('input.operand2')
      // op2.setValue('4')
      op2.element.value = '4'
      op2.trigger('input')

      const operation = wrapper.find('button[name="*"]')
      operation.trigger('click')

      expect(wrapper.vm.result).toBe(8)
   })

   it('DIV method test', () => {
      const wrapper = mount(Calculator)
      const op1 = wrapper.find('input.operand1')
      op1.setValue('8')
      const op2 = wrapper.find('input.operand2')
      op2.setValue('4')

      const operation = wrapper.find('button[name="/"]')
      operation.trigger('click')

      expect(wrapper.vm.result).toBe(2)
   })
})

describe('Virtual keyboard test to operand 1', () => {
   it('Test buttons keyboard', () => {
      const wrapper = mount(Calculator)

      wrapper.vm.operch = '1'

      const button1 = wrapper.find('button[name="1"]')
      const button2 = wrapper.find('button[name="2"]')
      button1.trigger('click')
      button2.trigger('click')

      expect(wrapper.vm.operand1).toBe(12)
   })

   it('Test buttons keyboard to operand 2', () => {
      const wrapper = mount(Calculator)
      const op2 = wrapper.find('input.operand2')
      op2.setValue('3')

      wrapper.vm.operch = '2'

      const button = wrapper.find('button[name="4"]')
      button.trigger('click')

      expect(wrapper.vm.operand2).toBe(34)
   })

   it('Test button keyboard - erase to operand 2', () => {
      const wrapper = mount(Calculator)

      wrapper.vm.operch = '2'

      const button = wrapper.find('button[name="4"]')
      button.trigger('click')
      button.trigger('click')

      const erase = wrapper.find('button.erase')
      erase.trigger('click')

      expect(wrapper.vm.operand2).toBe(4)
   })
})