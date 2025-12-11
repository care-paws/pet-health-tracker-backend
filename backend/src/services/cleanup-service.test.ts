import { describe, it, expect, vi, beforeEach, expectTypeOf } from 'vitest'
import prismaMock from '../__mocks__/client.js'
import { CleanupService } from './cleanup-service.js'

const service = new CleanupService(prismaMock)

describe('cleanup-service', () => {
    describe('clearAllData', () => {
        it('should call deleteMany for all entities', async () => {
        await service.clearAllData()
        expect(prismaMock.reminder.deleteMany).toHaveBeenCalled()
        expect(prismaMock.event.deleteMany).toHaveBeenCalled()
        expect(prismaMock.pet.deleteMany).toHaveBeenCalled()
        expect(prismaMock.user.deleteMany).toHaveBeenCalled()
    })
    })
})