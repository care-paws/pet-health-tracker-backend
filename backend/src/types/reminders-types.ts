import type { Reminder, Event } from '../generated/prisma/client.js'
import type { ReminderStatus } from '../generated/prisma/enums.js'
import { z } from 'zod'

export interface ReminderWithEvent {
  id: string
  triggerTime: Date
  description: string | null
  status: ReminderStatus
  eventId: string
  event: Event
}
export interface IRemindersService {
  listByEventId: (eventId: string) => Promise<Reminder[]>
  create: (data: CreatePayload) => Promise<ReminderWithEvent>
  update: (id: string, data: UpdatePayload) => Promise<Reminder>
  delete: (id: string) => Promise<void>
  deleteAllByEventId: (eventId: string) => Promise<void>
}
export interface ControllerDeps {
  remindersService: IRemindersService
}

export interface CreatePayload {
  triggerTime: string
  eventId: string
  description?: string | null
}

export interface UpdatePayload {
  triggerTime?: Date
  status?: ReminderStatus
  description?: string | null
}

export const createReminderSchema = z.object({
  triggerTime: z.iso.datetime({ offset: true }),
  eventId: z.string(),
  description: z.string().optional(),
  eventUrl: z.string().optional()
})

export type CreateReminderSchema = z.infer<typeof createReminderSchema>
