/*
    Test 1: Logger Singleton
    Scenario: Implement a Singleton Logger
    You are tasked with creating a logger system that logs messages with different severity levels (e.g., info, error, warn) and timestamps. The logger must be a singleton, meaning only one instance can exist throughout the application, and any part of the application should be able to use the same instance.

    Task
    Create a Logger singleton class.
    It should have methods logInfo(), logError(), and logWarn() to log messages with appropriate severity levels.
    Each log message should be stored in an internal array with a timestamp.
    The logs should be accessible via a getLogs() method.
*/

class Logger {
    constructor() {
        if (Logger.instance)
            return Logger.instance
        this.logs = []
        Logger.instance = this
    }

    static getInstance() {
        if (this.instance === null)
            this.instance = new Logger()
        return this.instance
    }

    logInfo() {
        const timestamp = new Date().toISOString()
        this.logs.push(`INFO ::: ${timestamp}`)
    }

    logWarn() {
        const timestamp = new Date().toISOString()
        this.logs.push(`WARN ::: ${timestamp}`)
    }

    logError() {
        const timestamp = new Date().toISOString()
        this.logs.push(`ERROR ::: ${timestamp}`)
    }

    getLogs() {
        return this.logs
    }
}

const logger1 = new Logger()
const logger2 = new Logger()

// if (logger1 === logger2) {
//     console.log('Same instance')
// } else {
//     console.log('Diff instance')
// }

logger2.logInfo()
logger1.logWarn()
logger2.logError()

// console.log('logs :::', JSON.stringify(logger1.getLogs()))

/*
    Test 2: Configuration Manager Singleton
    Scenario: Implement a Singleton Configuration Manager
    You need to create a Configuration Manager that loads application configurations (like database settings, API keys, etc.) from a JSON file and provides a method to retrieve or update these configurations globally. The configuration manager must be a singleton to ensure consistency across the application.

    Task
    Create a ConfigManager singleton class that reads configuration settings from an object (simulating a JSON file).
    Implement a get() method to retrieve specific configuration values.
    Implement a set() method to update configuration values globally.
    Ensure that any changes made by one part of the application are reflected throughout the entire app due to the singleton nature.
*/

class ConfigManager {
    constructor() {
        if (ConfigManager.instance)
            return ConfigManager.instance
        this.configs = null
        ConfigManager.instance = this
    }

    setConfig(configs) {
        this.configs = configs
    }

    getConfig() {
        return this.configs
    }
}

const configPM1 = new ConfigManager()
const configPM2 = new ConfigManager()

// if (configPM1 === configPM2) {
//     console.log('Same instance')
// } else {
//     console.log('Diff instance')
// }

configPM1.setConfig({ time: '20240101', env: 'PROD' })
const configs = configPM2.getConfig()
// console.log('configs :::', configs)

/*
    Test 3: Database Connection Pool Singleton
    Scenario: Implement a Singleton Database Connection Pool
    You need to implement a database connection pool where the system manages a pool of database connections. The connection pool must be a singleton to ensure that the database connections are reused, and a new connection is only created if none are available.

    Task
    Create a DBConnectionPool singleton class that manages multiple connections in an internal array.
    Implement a getConnection() method that either reuses an existing connection or creates a new one if no connection is available.
    Implement a releaseConnection() method to release a connection back to the pool.
    Ensure the connection pool size is limited (e.g., max 3 connections).
*/
class DBConnectionPool {
    constructor() {
        if (DBConnectionPool.instance)
            return DBConnectionPool.instance
        this.pool = []
        this.used = 0
        this.maxConnections = 3
        DBConnectionPool.instance = this
    }

    getConnection() {
        if (this.pool.length > 0) {
            console.log('Reuse existing connection')
            return this.pool.pop()
        }

        if (this.used < this.maxConnections) {
            console.log('Create new connection')
            this.used++
            return `Connection: ${Date.now()} ${this.used}`
        }

        console.log('No available connection')
        return null;
    }

    releaseConnection(connection) {
        if (this.pool.length < this.maxConnections) {
            this.pool.push(connection)
            console.log('Release connection success!')
        } else {
            console.log('Release connection fail!')
        }
    }
}

const pool = new DBConnectionPool()

// const connection1 = pool.getConnection()
// const connection2 = pool.getConnection()
// const connection3 = pool.getConnection()
// const connection4 = pool.getConnection()
// console.log('connection1', connection1)
// console.log('connection2', connection2)
// console.log('connection3', connection3)
// console.log('connection4', connection4)
// pool.releaseConnection(connection1)
// const connection5 = pool.getConnection()
// const connection6 = pool.getConnection()

/*
    Test 4: Caching Singleton
    Scenario: Implement a Singleton Caching System
    You need to implement a caching system that stores and retrieves data efficiently. The cache should be globally accessible as a singleton and have a size limit. When the cache exceeds the limit, the oldest cached items should be removed to make room for new ones (FIFO cache eviction policy).

    Task
    Create a Cache singleton class.
    Implement a set() method to store key-value pairs in the cache.
    Implement a get() method to retrieve values by key.
    Implement a size limit for the cache, and remove the oldest cached item when the limit is exceeded.
    Ensure that the cache behaves as a singleton.
*/

class Cache {
    constructor() {
        if (Cache.instance)
            return Cache.instance
        this.caches = []
        this.maxCacheSize = 5
        Cache.instance = this
    }

    get() {
        return this.caches
    }

    push(message) {
        console.log('before', JSON.stringify(this.caches))
        if (this.caches.length >= this.maxCacheSize) {
            this.caches.shift()
        }
        this.caches.push(message)
        console.log('after', JSON.stringify(this.caches))
    }
}

const cache1 = new Cache()
const cache2 = new Cache()

if (cache1 === cache2) {
    console.log('singleton!')
}

cache1.push('test1')
cache1.push('test2')
cache1.push('test3')
cache2.push('test4')
cache2.push('test5')
cache2.push('test6')
cache1.push('test7')
