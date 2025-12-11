import { vi, describe, it, beforeEach, expect } from 'vitest'
import type { Request, Response, NextFunction } from 'express'
import { cleanupController } from './cleanup-controller.js'

describe('cleanup-controller', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.resetAllMocks()
  })
  const setupMocks = (reqOverrides = {}, resOverrides = {}) => {
    const res: Partial<Response> = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
      json: vi.fn(),
      cookie: vi.fn().mockReturnThis(),
      ...resOverrides
    }
    const req: Partial<Request> = {
      body: {},
      ...reqOverrides
    }
    const next: Partial<NextFunction> = vi.fn()

    const nextFn = next as NextFunction
    const resFn = res as Response
    const reqFn = req as Request

    return { reqFn, resFn, nextFn }
  }
  describe('clearDataBase', () => {
    it('calls cleanupService.clearAllData', async () => {
      const { reqFn, resFn, nextFn } = setupMocks()

      const deps = {
        cleanupService: {
          clearAllData: vi.fn().mockResolvedValue(undefined)
        }
      }

      const controller = cleanupController(deps)
      await controller.clearDatabase(reqFn, resFn, nextFn)
      expect(deps.cleanupService.clearAllData).toHaveBeenCalled()
      expect(resFn.status).toHaveBeenCalledWith(200)
      expect(resFn.json).toHaveBeenCalledWith({
        message: 'Database cleared successfully'
      })
      expect(nextFn).not.toHaveBeenCalled()
    })
  })
})
