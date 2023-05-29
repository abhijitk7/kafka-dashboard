export class InternalClusterState {
  name: string
  topicCount: Number
  brokerCount: Number
  activeControllers: Number
  onlinePartitionCount: Number
  offlinePartitionCount: Number
  inSyncReplicasCount: Number
  outOfSyncReplicasCount: Number
  underReplicatedPartitionCount: Number
  version: string
  readOnly: Boolean

  constructor(
    name: string,
    topicCount: Number,
    brokerCount: Number,
    activeControllers: Number,
    onlinePartitionCount: Number,
    offlinePartitionCount: Number,
    inSyncReplicasCount: Number,
    outOfSyncReplicasCount: Number,
    underReplicatedPartitionCount: Number,
    version: string,
    readOnly: Boolean,
  ) {
    this.name = name
    this.topicCount = topicCount
    this.brokerCount = brokerCount
    this.activeControllers = activeControllers
    this.onlinePartitionCount = onlinePartitionCount
    this.offlinePartitionCount = offlinePartitionCount
    this.inSyncReplicasCount = inSyncReplicasCount
    this.outOfSyncReplicasCount = outOfSyncReplicasCount
    this.underReplicatedPartitionCount = underReplicatedPartitionCount
    this.version = version
    this.readOnly = readOnly
  }
}
