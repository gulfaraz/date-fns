/* eslint-env mocha */

import assert from 'assert'
import { describe, it, beforeEach, afterEach } from 'vitest'
import sinon from 'sinon'
import isThisISOWeek from './index'

describe('isSameISOWeek', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same ISO week', () => {
    const date = new Date(2014, 8 /* Sep */, 22)
    assert(isThisISOWeek(date) === true)
  })

  it('returns false if the given date and the current date have different ISO weeks', () => {
    const date = new Date(2014, 8 /* Sep */, 21)
    assert(isThisISOWeek(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 29).getTime()
    assert(isThisISOWeek(date) === false)
  })
})
