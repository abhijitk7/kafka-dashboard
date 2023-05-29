export class TopicCreation {
  name: string
  partitions: number
  replicationFactor: number

  constructor(name: string, partitions: number, replicationFactor: number) {
    this.name = name
    this.partitions = partitions
    this.replicationFactor = replicationFactor
  }
}
