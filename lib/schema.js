module.exports = {
  "description": "The platform API empowers developers to automate, extend and combine Heroku with other services.",
  "definitions": {
    "account-feature": {
      "description": "An account feature represents a Heroku labs capability that can be enabled or disabled for an account on Heroku.",
      "id": "schema/account-feature",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Account Feature",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when account feature was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of account feature",
          "example": "Causes account to example.",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "doc_url": {
          "description": "documentation URL of account feature",
          "example": "http://devcenter.heroku.com/articles/example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "enabled": {
          "description": "whether or not account feature has been enabled",
          "example": true,
          "type": [
            "boolean"
          ]
        },
        "id": {
          "description": "unique identifier of account feature",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/account-feature/definitions/id"
            },
            {
              "$ref": "#/definitions/account-feature/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of account feature",
          "example": "name",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when account feature was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for an existing account feature.",
          "href": "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing account features.",
          "href": "/account/features",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing account feature.",
          "href": "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "enabled": {
                "$ref": "#/definitions/account-feature/definitions/enabled"
              }
            },
            "required": [
              "enabled"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/account-feature/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/account-feature/definitions/description"
        },
        "doc_url": {
          "$ref": "#/definitions/account-feature/definitions/doc_url"
        },
        "enabled": {
          "$ref": "#/definitions/account-feature/definitions/enabled"
        },
        "id": {
          "$ref": "#/definitions/account-feature/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/account-feature/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/account-feature/definitions/updated_at"
        }
      }
    },
    "account": {
      "description": "An account represents an individual signed up to use the Heroku platform.",
      "id": "schema/account",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Account",
      "type": [
        "object"
      ],
      "definitions": {
        "allow_tracking": {
          "default": true,
          "description": "whether to allow third party web activity tracking",
          "example": true,
          "type": [
            "boolean"
          ]
        },
        "beta": {
          "default": false,
          "description": "whether to utilize beta Heroku features",
          "example": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "created_at": {
          "description": "when account was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "unique email address of account",
          "example": "username@example.com",
          "format": "email",
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of an account",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/account/definitions/email"
            },
            {
              "$ref": "#/definitions/account/definitions/id"
            }
          ]
        },
        "last_login": {
          "description": "when account last authorized with Heroku",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "name": {
          "description": "full name of the account owner",
          "example": "Tina Edmonds",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "new_password": {
          "description": "the new password for the account when changing the password",
          "example": "newpassword",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "current password on the account",
          "example": "currentpassword",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when account was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "verified": {
          "default": false,
          "description": "whether account has been verified with billing information",
          "example": false,
          "type": [
            "boolean"
          ]
        }
      },
      "links": [
        {
          "description": "Info for account.",
          "href": "/account",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "Update account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "allow_tracking": {
                "$ref": "#/definitions/account/definitions/allow_tracking"
              },
              "beta": {
                "$ref": "#/definitions/account/definitions/beta"
              },
              "name": {
                "$ref": "#/definitions/account/definitions/name"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "password"
            ]
          },
          "title": "Update"
        },
        {
          "description": "Change Email for account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "email": {
                "$ref": "#/definitions/account/definitions/email"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "password",
              "email"
            ]
          },
          "title": "Change Email"
        },
        {
          "description": "Change Password for account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "new_password": {
                "$ref": "#/definitions/account/definitions/new_password"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "new_password",
              "password"
            ]
          },
          "title": "Change Password"
        }
      ],
      "properties": {
        "allow_tracking": {
          "$ref": "#/definitions/account/definitions/allow_tracking"
        },
        "beta": {
          "$ref": "#/definitions/account/definitions/beta"
        },
        "created_at": {
          "$ref": "#/definitions/account/definitions/created_at"
        },
        "email": {
          "$ref": "#/definitions/account/definitions/email"
        },
        "id": {
          "$ref": "#/definitions/account/definitions/id"
        },
        "last_login": {
          "$ref": "#/definitions/account/definitions/last_login"
        },
        "updated_at": {
          "$ref": "#/definitions/account/definitions/updated_at"
        },
        "verified": {
          "$ref": "#/definitions/account/definitions/verified"
        }
      }
    },
    "addon-service": {
      "description": "Add-on services represent add-ons that may be provisioned for apps.",
      "id": "schema/addon-service",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Addon Service",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when addon-service was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this addon-service",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon-service/definitions/id"
            },
            {
              "$ref": "#/definitions/addon-service/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of this addon-service",
          "example": "heroku-postgresql",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when addon-service was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing addon-service.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing addon-services.",
          "href": "/addon-services",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/addon-service/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/addon-service/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/addon-service/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/addon-service/definitions/updated_at"
        }
      }
    },
    "addon": {
      "description": "Add-ons represent add-ons that have been provisioned for an app.",
      "id": "schema/addon",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Add-on",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when add-on was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of add-on",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon/definitions/id"
            }
          ]
        },
        "updated_at": {
          "description": "when add-on was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "config": {
                "additionalProperties": false,
                "description": "custom add-on provisioning options",
                "example": {
                  "db-version": "1.2.3"
                },
                "patternProperties": {
                  "^\\w+$": {
                    "type": [
                      "string"
                    ]
                  }
                },
                "type": [
                  "object"
                ]
              },
              "plan": {
                "$ref": "#/definitions/plan/definitions/identity"
              }
            },
            "required": [
              "plan"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for an existing add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing add-ons.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "plan": {
                "$ref": "#/definitions/plan/definitions/identity"
              }
            },
            "required": [
              "plan"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/addon/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/addon/definitions/id"
        },
        "plan": {
          "description": "identity of add-on plan",
          "properties": {
            "id": {
              "$ref": "#/definitions/plan/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/plan/definitions/name"
            }
          },
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/addon/definitions/updated_at"
        }
      }
    },
    "app-feature": {
      "description": "An app feature represents a Heroku labs capability that can be enabled or disabled for an app on Heroku.",
      "id": "schema/app-feature",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - App Feature",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when app feature was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of app feature",
          "example": "Causes app to example.",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "doc_url": {
          "description": "documentation URL of app feature",
          "example": "http://devcenter.heroku.com/articles/example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "enabled": {
          "description": "whether or not app feature has been enabled",
          "example": true,
          "type": [
            "boolean"
          ]
        },
        "id": {
          "description": "unique identifier of app feature",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app/definitions/id"
            },
            {
              "$ref": "#/definitions/app/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of app feature",
          "example": "name",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when app feature was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for an existing app feature.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing app features.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing app feature.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "enabled": {
                "$ref": "#/definitions/app-feature/definitions/enabled"
              }
            },
            "required": [
              "enabled"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/app-feature/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/app-feature/definitions/description"
        },
        "doc_url": {
          "$ref": "#/definitions/app-feature/definitions/doc_url"
        },
        "enabled": {
          "$ref": "#/definitions/app-feature/definitions/enabled"
        },
        "id": {
          "$ref": "#/definitions/app-feature/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/app-feature/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/app-feature/definitions/updated_at"
        }
      }
    },
    "app-transfer": {
      "description": "An app transfer represents a two party interaction for transferring ownership of an app.",
      "id": "schema/app-transfer",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - App Transfer",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when app transfer was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of app transfer",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app-transfer/definitions/id"
            }
          ]
        },
        "state": {
          "description": "the current state of an app transfer",
          "enum": [
            "pending",
            "accepted",
            "declined"
          ],
          "example": "pending",
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when app transfer was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new app transfer.",
          "href": "/account/app-transfers",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "app": {
                "$ref": "#/definitions/app/definitions/identity"
              },
              "recipient": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "app",
              "recipient"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing app transfer",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing app transfer.",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing apps transfers.",
          "href": "/account/app-transfers",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing app transfer.",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "state": {
                "$ref": "#/definitions/app-transfer/definitions/state"
              }
            },
            "required": [
              "state"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "app": {
          "description": "app involved in the transfer",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/app-transfer/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/app-transfer/definitions/id"
        },
        "owner": {
          "description": "identity of the owner of the transfer",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "recipient": {
          "description": "identity of the recipient of the transfer",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "state": {
          "$ref": "#/definitions/app-transfer/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/app-transfer/definitions/updated_at"
        }
      }
    },
    "app": {
      "description": "An app represents the program that you would like to deploy and run on Heroku.",
      "id": "schema/app",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Apps",
      "type": [
        "object"
      ],
      "definitions": {
        "archived_at": {
          "description": "when app was archived",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "buildpack_provided_description": {
          "description": "description from buildpack of app",
          "example": "Ruby/Rack",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "created_at": {
          "description": "when app was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "git_url": {
          "description": "git repo URL of app",
          "example": "git@heroku.com/example.git",
          "format": "uri",
          "pattern": "^git@heroku\\.com/[a-z][a-z0-9-]{3,30}\\.git$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of app",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app/definitions/id"
            },
            {
              "$ref": "#/definitions/app/definitions/name"
            }
          ]
        },
        "maintenance": {
          "default": false,
          "description": "maintenance status of app",
          "example": false,
          "type": [
            "boolean"
          ]
        },
        "name": {
          "description": "unique name of app",
          "example": "example",
          "pattern": "^[a-z][a-z0-9-]{3,30}$",
          "type": [
            "string"
          ]
        },
        "released_at": {
          "default": null,
          "description": "when app was released",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "repo_size": {
          "default": null,
          "description": "git repo size in bytes of app",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "slug_size": {
          "default": null,
          "description": "slug size in bytes of app",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "updated_at": {
          "description": "when app was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "web_url": {
          "description": "web URL of app",
          "example": "http://example.herokuapp.com",
          "format": "uri",
          "pattern": "^http://[a-z][a-z0-9-]{3,30}\\.herokuapp\\.com$",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new app.",
          "href": "/apps",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/app/definitions/name"
              },
              "region": {
                "$ref": "#/definitions/region/definitions/identity"
              },
              "stack": {
                "$ref": "#/definitions/stack/definitions/identity"
              }
            }
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing apps.",
          "href": "/apps",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "maintenance": {
                "$ref": "#/definitions/app/definitions/maintenance"
              },
              "name": {
                "$ref": "#/definitions/app/definitions/name"
              }
            }
          },
          "title": "Update"
        }
      ],
      "properties": {
        "archived_at": {
          "$ref": "#/definitions/app/definitions/archived_at"
        },
        "buildpack_provided_description": {
          "$ref": "#/definitions/app/definitions/buildpack_provided_description"
        },
        "created_at": {
          "$ref": "#/definitions/app/definitions/created_at"
        },
        "git_url": {
          "$ref": "#/definitions/app/definitions/git_url"
        },
        "id": {
          "$ref": "#/definitions/app/definitions/id"
        },
        "maintenance": {
          "$ref": "#/definitions/app/definitions/maintenance"
        },
        "name": {
          "$ref": "#/definitions/app/definitions/name"
        },
        "owner": {
          "description": "identity of app owner",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "region": {
          "description": "identity of app region",
          "properties": {
            "id": {
              "$ref": "#/definitions/region/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/region/definitions/name"
            }
          },
          "type": [
            "object"
          ]
        },
        "released_at": {
          "$ref": "#/definitions/app/definitions/released_at"
        },
        "repo_size": {
          "$ref": "#/definitions/app/definitions/repo_size"
        },
        "slug_size": {
          "$ref": "#/definitions/app/definitions/slug_size"
        },
        "stack": {
          "$ref": "#/definitions/stack/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/app/definitions/updated_at"
        },
        "web_url": {
          "$ref": "#/definitions/app/definitions/web_url"
        }
      }
    },
    "collaborator": {
      "description": "A collaborator represents an account that has been given access to an app on Heroku.",
      "id": "schema/collaborator",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Collaborator",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when collaborator was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "invited email address of collaborator",
          "example": "collaborator@example.com",
          "format": "email",
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of collaborator",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/collaborator/definitions/email"
            },
            {
              "$ref": "#/definitions/collaborator/definitions/id"
            }
          ]
        },
        "silent": {
          "default": false,
          "description": "whether to suppress email invitation when creating collaborator",
          "example": false,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when collaborator was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "silent": {
                "$ref": "#/definitions/collaborator/definitions/silent"
              },
              "user": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "user"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing collaborators.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/collaborator/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/collaborator/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/collaborator/definitions/updated_at"
        },
        "user": {
          "description": "identity of collaborated account",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        }
      }
    },
    "config-var": {
      "description": "Config Vars allow you to manage the configuration information provided to an app on Heroku.",
      "id": "schema/config-var",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Config Vars",
      "type": [
        "object"
      ],
      "definitions": {
      },
      "links": [
        {
          "description": "Get config-vars for app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "Update config-vars for app. You can update existing config-vars by setting them again, and remove by setting it to `NULL`.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "additionalProperties": false,
            "description": "hash of config changes – update values or delete by seting it to NULL",
            "example": {
              "FOO": null,
              "BAZ": "grault"
            },
            "patternProperties": {
              "^\\w+$": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "example": {
        "FOO": "bar",
        "BAZ": "qux"
      },
      "patternProperties": {
        "^\\w+$": {
          "type": [
            "string"
          ]
        }
      },
      "additionalProperties": false
    },
    "domain": {
      "description": "Domains define what web routes should be routed to an app on Heroku.",
      "id": "schema/domain",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Domain",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when domain was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "hostname": {
          "description": "full hostname",
          "example": "subdomain.example.com",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this domain",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/domain/definitions/id"
            },
            {
              "$ref": "#/definitions/domain/definitions/hostname"
            }
          ]
        },
        "updated_at": {
          "description": "when domain was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new domain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "hostname": {
                "$ref": "#/definitions/domain/definitions/hostname"
              }
            },
            "required": [
              "hostname"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing domain",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing domain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing domains.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/domain/definitions/created_at"
        },
        "hostname": {
          "$ref": "#/definitions/domain/definitions/hostname"
        },
        "id": {
          "$ref": "#/definitions/domain/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/domain/definitions/updated_at"
        }
      }
    },
    "dyno": {
      "description": "Dynos encapsulate running processes of an app on Heroku.",
      "id": "schema/dyno",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Dyno",
      "type": [
        "object"
      ],
      "definitions": {
        "attach": {
          "description": "whether to stream output or not",
          "example": true,
          "type": [
            "boolean"
          ]
        },
        "attach_url": {
          "description": "a URL to stream output from for attached processes or null for non-attached processes",
          "example": "rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}",
          "type": [
            "string",
            "null"
          ]
        },
        "command": {
          "description": "command used to start this process",
          "example": "bash",
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when dyno was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "env": {
          "additionalProperties": false,
          "description": "custom environment to add to the dyno config vars",
          "example": {
            "COLUMNS": "80",
            "LINES": "24"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string"
              ]
            }
          },
          "type": [
            "object"
          ]
        },
        "id": {
          "description": "unique identifier of this dyno",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/dyno/definitions/id"
            },
            {
              "$ref": "#/definitions/dyno/definitions/name"
            }
          ]
        },
        "name": {
          "description": "the name of this process on this dyno",
          "example": "run.1",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "size": {
          "description": "dyno size (default: \"1\")",
          "example": "1",
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "current status of process (either: crashed, down, idle, starting, or up)",
          "example": "up",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "type": {
          "description": "type of process",
          "example": "run",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when process last changed state",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "attach": {
                "$ref": "#/definitions/dyno/definitions/attach"
              },
              "command": {
                "$ref": "#/definitions/dyno/definitions/command"
              },
              "env": {
                "$ref": "#/definitions/dyno/definitions/env"
              },
              "size": {
                "$ref": "#/definitions/dyno/definitions/size"
              }
            },
            "required": [
              "command"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Restart dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Restart"
        },
        {
          "description": "Restart all dynos",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Restart all"
        },
        {
          "description": "Info for existing dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing dynos.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "attach_url": {
          "$ref": "#/definitions/dyno/definitions/attach_url"
        },
        "command": {
          "$ref": "#/definitions/dyno/definitions/command"
        },
        "created_at": {
          "$ref": "#/definitions/dyno/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/dyno/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/dyno/definitions/name"
        },
        "release": {
          "description": "app release of the dyno",
          "properties": {
            "id": {
              "$ref": "#/definitions/release/definitions/id"
            },
            "version": {
              "$ref": "#/definitions/release/definitions/version"
            }
          },
          "type": [
            "object"
          ]
        },
        "size": {
          "$ref": "#/definitions/dyno/definitions/size"
        },
        "state": {
          "$ref": "#/definitions/dyno/definitions/state"
        },
        "type": {
          "$ref": "#/definitions/dyno/definitions/type"
        },
        "updated_at": {
          "$ref": "#/definitions/dyno/definitions/updated_at"
        }
      }
    },
    "formation": {
      "description": "The formation of processes that should be maintained for an app. Update the formation to scale processes or change dyno sizes. Commands and types are defined by the Procfile uploaded with an app.",
      "id": "schema/formation",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Formation",
      "type": [
        "object"
      ],
      "definitions": {
        "command": {
          "description": "command to use to launch this process",
          "example": "bundle exec rails server -p $PORT",
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when process type was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this process type",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/formation/definitions/id"
            },
            {
              "$ref": "#/definitions/formation/definitions/type"
            }
          ]
        },
        "quantity": {
          "description": "number of processes to maintain",
          "example": 1,
          "type": [
            "integer"
          ]
        },
        "size": {
          "description": "dyno size (default: \"1\")",
          "example": "1",
          "type": [
            "string"
          ]
        },
        "type": {
          "description": "type of process to maintain",
          "example": "web",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when dyno type was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "update": {
          "additionalProperties": false,
          "properties": {
            "process": {
              "$ref": "#/definitions/formation/definitions/identity"
            },
            "quantity": {
              "$ref": "#/definitions/formation/definitions/quantity"
            },
            "size": {
              "$ref": "#/definitions/formation/definitions/size"
            }
          },
          "required": [
            "process"
          ],
          "type": [
            "object"
          ]
        }
      },
      "links": [
        {
          "description": "Info for a process type",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List process type formation",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Batch update process types",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "updates": {
                "type": [
                  "array"
                ],
                "items": {
                  "$ref": "#/definitions/formation/definitions/update"
                },
                "description": "Array with formation updates. Each element must have \"process\", the id or name of the process type to be updated, and can optionally update its \"quantity\" or \"size\".",
                "example": {
                  "updates": [
                    {
                      "process": "web",
                      "quantity": 1,
                      "size": 2
                    }
                  ]
                }
              }
            },
            "required": [
              "updates"
            ]
          },
          "title": "Batch update"
        },
        {
          "description": "Update process type",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "quantity": {
                "$ref": "#/definitions/formation/definitions/quantity"
              },
              "size": {
                "$ref": "#/definitions/formation/definitions/size"
              }
            }
          },
          "title": "Update"
        }
      ],
      "properties": {
        "command": {
          "$ref": "#/definitions/formation/definitions/command"
        },
        "created_at": {
          "$ref": "#/definitions/formation/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/formation/definitions/id"
        },
        "quantity": {
          "$ref": "#/definitions/formation/definitions/quantity"
        },
        "size": {
          "$ref": "#/definitions/formation/definitions/size"
        },
        "type": {
          "$ref": "#/definitions/formation/definitions/type"
        },
        "updated_at": {
          "$ref": "#/definitions/formation/definitions/updated_at"
        }
      }
    },
    "key": {
      "description": "Keys represent public SSH keys associated with an account and are used to authorize accounts as they are performing git operations.",
      "id": "schema/key",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Key",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when key was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "email address provided in key contents",
          "example": "username@example.com",
          "format": "email",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "fingerprint": {
          "description": "a unique identifying string based on contents",
          "example": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this key",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/key/definitions/id"
            },
            {
              "$ref": "#/definitions/key/definitions/fingerprint"
            }
          ]
        },
        "public_key": {
          "description": "full public_key as uploaded",
          "example": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when key was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new key.",
          "href": "/account/keys",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "public_key": {
                "$ref": "#/definitions/key/definitions/public_key"
              }
            },
            "required": [
              "public_key"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing key",
          "href": "/account/keys/{(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing key.",
          "href": "/account/keys/{(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing keys.",
          "href": "/account/keys",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/key/definitions/created_at"
        },
        "email": {
          "$ref": "#/definitions/key/definitions/email"
        },
        "fingerprint": {
          "$ref": "#/definitions/key/definitions/fingerprint"
        },
        "id": {
          "$ref": "#/definitions/key/definitions/id"
        },
        "public_key": {
          "$ref": "#/definitions/key/definitions/public_key"
        },
        "updated_at": {
          "$ref": "#/definitions/key/definitions/updated_at"
        }
      }
    },
    "log-drain": {
      "description": "[Log drains](https://devcenter.heroku.com/articles/logging#syslog-drains) provide a way to forward your Heroku logs to an external syslog server for long-term archiving. This external service must be configured to receive syslog packets from Heroku, whereupon its URL can be added to an app using this API.",
      "id": "schema/log-drain",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Log Drain",
      "type": [
        "object"
      ],
      "definitions": {
        "addon": {
          "description": "addon that created the drain",
          "example": "example",
          "properties": {
            "id": {
              "$ref": "#/definitions/addon/definitions/id"
            }
          },
          "type": [
            "object",
            "null"
          ]
        },
        "created_at": {
          "description": "when log drain was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this log drain",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/log-drain/definitions/id"
            },
            {
              "$ref": "#/definitions/log-drain/definitions/url"
            }
          ]
        },
        "updated_at": {
          "description": "when log drain was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "url": {
          "description": "url associated with the log drain",
          "example": "https://example.com/drain",
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new log drain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "url": {
                "$ref": "#/definitions/log-drain/definitions/url"
              }
            },
            "required": [
              "url"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing log drain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing log drain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing log drains.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "addon": {
          "$ref": "#/definitions/log-drain/definitions/addon"
        },
        "created_at": {
          "$ref": "#/definitions/log-drain/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/log-drain/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/log-drain/definitions/updated_at"
        },
        "url": {
          "$ref": "#/definitions/log-drain/definitions/url"
        }
      }
    },
    "log-session": {
      "description": "A log session is a reference to the http based log stream for an app.",
      "id": "schema/log-session",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Log Session",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when log connection was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "dyno": {
          "description": "dyno to limit results to",
          "example": "web.1",
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this log session",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/log-session/definitions/id"
            }
          ]
        },
        "lines": {
          "description": "number of log lines to stream at once",
          "example": 10,
          "type": [
            "integer"
          ]
        },
        "logplex_url": {
          "description": "URL for log streaming session",
          "example": "https://logplex.heroku.com/sessions/01234567-89ab-cdef-0123-456789abcdef?srv=1325419200",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "source": {
          "description": "log source to limit results to",
          "example": "app",
          "type": [
            "string"
          ]
        },
        "tail": {
          "description": "whether to stream ongoing logs",
          "example": true,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when log session was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new log session.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-sessions",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "dyno": {
                "$ref": "#/definitions/log-session/definitions/dyno"
              },
              "lines": {
                "$ref": "#/definitions/log-session/definitions/lines"
              },
              "source": {
                "$ref": "#/definitions/log-session/definitions/source"
              },
              "tail": {
                "$ref": "#/definitions/log-session/definitions/tail"
              }
            }
          },
          "title": "Create"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/log-session/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/log-session/definitions/id"
        },
        "logplex_url": {
          "$ref": "#/definitions/log-session/definitions/logplex_url"
        },
        "updated_at": {
          "$ref": "#/definitions/log-session/definitions/updated_at"
        }
      }
    },
    "oauth-authorization": {
      "description": "OAuth authorizations represent clients that a Heroku user has authorized to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "id": "schema/oauth-authorization",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - OAuth Authorization",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth authorization was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "human-friendly description of this OAuth authorization",
          "example": "sample authorization",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-authorization/definitions/id"
            }
          ]
        },
        "scope": {
          "description": "The scope of access OAuth authorization allows",
          "example": [
            "global"
          ],
          "readOnly": true,
          "type": [
            "array"
          ],
          "items": {
            "type": "string"
          }
        },
        "updated_at": {
          "description": "when OAuth authorization was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth authorization.",
          "href": "/oauth/authorizations",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "client": {
                "$ref": "#/definitions/oauth-client/definitions/identity"
              },
              "description": {
                "$ref": "#/definitions/oauth-authorization/definitions/description"
              },
              "expires_in": {
                "$ref": "#/definitions/oauth-token/definitions/expires_in"
              },
              "scope": {
                "$ref": "#/definitions/oauth-authorization/definitions/scope"
              }
            },
            "required": [
              "scope"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete OAuth authorization.",
          "href": "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for an OAuth authorization.",
          "href": "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List OAuth authorizations.",
          "href": "/oauth/authorizations",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "access_token": {
          "description": "access token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "client": {
          "description": "identifier of the client that obtained this authorization, if any",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-client/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/oauth-client/definitions/name"
            },
            "redirect_uri": {
              "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/oauth-authorization/definitions/created_at"
        },
        "grant": {
          "description": "this authorization's grant",
          "properties": {
            "code": {
              "$ref": "#/definitions/oauth-grant/definitions/code"
            },
            "expires_in": {
              "$ref": "#/definitions/oauth-grant/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-grant/definitions/id"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "id": {
          "$ref": "#/definitions/oauth-authorization/definitions/id"
        },
        "refresh_token": {
          "description": "refresh token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "scope": {
          "$ref": "#/definitions/oauth-authorization/definitions/scope"
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-authorization/definitions/updated_at"
        }
      }
    },
    "oauth-client": {
      "description": "OAuth clients are applications that Heroku users can authorize to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth).",
      "id": "schema/oauth-client",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - OAuth Client",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth client was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this OAuth client",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-client/definitions/id"
            }
          ]
        },
        "ignores_delinquent": {
          "description": "whether the client is still operable given a delinquent account",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean",
            "null"
          ]
        },
        "name": {
          "description": "OAuth client name",
          "example": "example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "redirect_uri": {
          "description": "endpoint for redirection after authorization with OAuth client",
          "example": "https://example.com/auth/heroku/callback",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "secret": {
          "description": "secret used to obtain OAuth authorizations under this client",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when OAuth client was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth client.",
          "href": "/oauth/clients",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/oauth-client/definitions/name"
              },
              "redirect_uri": {
                "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
              }
            },
            "required": [
              "name",
              "redirect_uri"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete OAuth client.",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for an OAuth client",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List OAuth clients",
          "href": "/oauth/clients",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update OAuth client",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/oauth-client/definitions/name"
              },
              "redirect_uri": {
                "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
              }
            }
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/oauth-client/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/oauth-client/definitions/id"
        },
        "ignores_delinquent": {
          "$ref": "#/definitions/oauth-client/definitions/ignores_delinquent"
        },
        "name": {
          "$ref": "#/definitions/oauth-client/definitions/name"
        },
        "redirect_uri": {
          "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
        },
        "secret": {
          "$ref": "#/definitions/oauth-client/definitions/secret"
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-client/definitions/updated_at"
        }
      }
    },
    "oauth-grant": {
      "description": "OAuth grants are used to obtain authorizations on behalf of a user. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "id": "schema/oauth-grant",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - OAuth Grant",
      "type": [
        "object"
      ],
      "definitions": {
        "code": {
          "description": "grant code received from OAuth web application authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "expires_in": {
          "description": "seconds until OAuth grant expires",
          "example": 2592000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth grant",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "type": {
          "description": "type of grant requested, one of `authorization_code` or `refresh_token`",
          "example": "authorization_code",
          "readOnly": false,
          "type": [
            "string"
          ]
        }
      },
      "links": [
      ],
      "properties": {
      }
    },
    "oauth-token": {
      "description": "OAuth tokens provide access for authorized clients to act on behalf of a Heroku user to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "id": "schema/oauth-token",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - OAuth Token",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth token was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "expires_in": {
          "description": "seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime",
          "example": 2592000,
          "readOnly": true,
          "type": [
            "null",
            "integer"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth token",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-token/definitions/id"
            }
          ]
        },
        "token": {
          "description": "contents of the token to be used for authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when OAuth token was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth token.",
          "href": "/oauth/tokens",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "client": {
                "type": [
                  "object"
                ],
                "properties": {
                  "secret": {
                    "$ref": "#/definitions/oauth-client/definitions/secret"
                  }
                }
              },
              "grant": {
                "type": [
                  "object"
                ],
                "properties": {
                  "code": {
                    "$ref": "#/definitions/oauth-grant/definitions/code"
                  },
                  "type": {
                    "$ref": "#/definitions/oauth-grant/definitions/type"
                  }
                }
              },
              "refresh_token": {
                "type": [
                  "object"
                ],
                "properties": {
                  "token": {
                    "$ref": "#/definitions/oauth-token/definitions/token"
                  }
                }
              }
            },
            "required": [
              "grant",
              "client",
              "refresh_token"
            ]
          },
          "title": "Create"
        }
      ],
      "properties": {
        "access_token": {
          "description": "current access token",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "type": [
            "object"
          ]
        },
        "authorization": {
          "description": "authorization for this set of tokens",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-authorization/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "client": {
          "description": "OAuth client secret used to obtain token",
          "properties": {
            "secret": {
              "$ref": "#/definitions/oauth-client/definitions/secret"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/oauth-token/definitions/created_at"
        },
        "grant": {
          "description": "grant used on the underlying authorization",
          "properties": {
            "code": {
              "$ref": "#/definitions/oauth-grant/definitions/code"
            },
            "type": {
              "$ref": "#/definitions/oauth-grant/definitions/type"
            }
          },
          "type": [
            "object"
          ]
        },
        "id": {
          "$ref": "#/definitions/oauth-token/definitions/id"
        },
        "refresh_token": {
          "description": "refresh token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "type": [
            "object"
          ]
        },
        "session": {
          "description": "OAuth session using this token",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-token/definitions/updated_at"
        },
        "user": {
          "description": "Reference to the user associated with this token",
          "properties": {
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        }
      }
    },
    "plan": {
      "description": "Plans represent different configurations of add-ons that may be added to apps.",
      "id": "schema/plan",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Plan",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when plan was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of plan",
          "example": "Heroku Postgres Dev",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this plan",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/plan/definitions/id"
            },
            {
              "$ref": "#/definitions/plan/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of this plan",
          "example": "heroku-postgresql",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "cents": {
          "description": "price in cents per unit of plan",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "unit": {
          "description": "unit of price for plan",
          "example": "month",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "release status for plan",
          "example": "public",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when plan was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing plan.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}/plans/{(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing plans.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}/plans",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/plan/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/plan/definitions/description"
        },
        "id": {
          "$ref": "#/definitions/plan/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/plan/definitions/name"
        },
        "price": {
          "description": "price",
          "properties": {
            "cents": {
              "$ref": "#/definitions/plan/definitions/cents"
            },
            "unit": {
              "$ref": "#/definitions/plan/definitions/unit"
            }
          },
          "type": [
            "object"
          ]
        },
        "state": {
          "$ref": "#/definitions/plan/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/plan/definitions/updated_at"
        }
      }
    },
    "rate-limit": {
      "description": "Rate Limit represents the number of request tokens each account holds. Requests to this endpoint do not count towards the rate limit.",
      "id": "schema/rate-limit",
      "title": "Heroku Platform API - Rate Limit",
      "type": [
        "object"
      ],
      "definitions": {
        "remaining": {
          "description": "allowed requests remaining in current interval",
          "example": 2399,
          "readOnly": true,
          "type": [
            "integer"
          ]
        }
      },
      "links": [
        {
          "description": "Info for rate limits.",
          "href": "/account/rate-limits",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        }
      ],
      "properties": {
        "remaining": {
          "$ref": "#/definitions/rate-limit/definitions/remaining"
        }
      }
    },
    "region": {
      "description": "A region represents a geographic location in which your application may run.",
      "id": "schema/region",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Region",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when region was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of region",
          "example": "United States",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of region",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/region/definitions/id"
            },
            {
              "$ref": "#/definitions/region/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of region",
          "example": "us",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when region was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing region.",
          "href": "/regions/{(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing regions.",
          "href": "/regions",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/region/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/region/definitions/description"
        },
        "id": {
          "$ref": "#/definitions/region/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/region/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/region/definitions/updated_at"
        }
      }
    },
    "release": {
      "description": "A release represents a combination of code, config vars and add-ons for an app on Heroku.",
      "id": "schema/release",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Release",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when release was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of changes in this release",
          "example": "Added new feature",
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of release",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/release/definitions/id"
            },
            {
              "$ref": "#/definitions/release/definitions/version"
            }
          ]
        },
        "updated_at": {
          "description": "when release was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "version": {
          "description": "unique version assigned to the release",
          "example": 11,
          "readOnly": true,
          "type": [
            "integer"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases/{(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing releases.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Create new release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "description": {
                "$ref": "#/definitions/release/definitions/description"
              },
              "slug": {
                "$ref": "#/definitions/slug/definitions/identity"
              }
            },
            "required": [
              "slug"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Rollback to an existing release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "release": {
                "$ref": "#/definitions/release/definitions/id"
              }
            },
            "required": [
              "release"
            ]
          },
          "title": "Rollback"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/release/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/release/definitions/description"
        },
        "id": {
          "$ref": "#/definitions/release/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/release/definitions/updated_at"
        },
        "slug": {
          "description": "slug running in this release",
          "properties": {
            "id": {
              "$ref": "#/definitions/slug/definitions/id"
            }
          },
          "type": [
            "object",
            "null"
          ]
        },
        "user": {
          "description": "user that created the release",
          "properties": {
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            },
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            }
          },
          "type": [
            "object"
          ]
        },
        "version": {
          "$ref": "#/definitions/release/definitions/version"
        }
      }
    },
    "slug": {
      "description": "A slug is a snapshot of your application code that is ready to run on the platform.",
      "id": "schema/slug",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Slug",
      "type": [
        "object"
      ],
      "definitions": {
        "blob": {
          "additionalProperties": false,
          "description": "HTTP verb and url where clients can fetch or store the release blob file",
          "example": {
            "get": "https://api.heroku.com/slugs/1234.tgz"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string"
              ]
            }
          },
          "type": [
            "object"
          ]
        },
        "commit": {
          "description": "identification of the code with your version control system (eg: SHA of the git HEAD)",
          "example": "60883d9e8947a57e04dc9124f25df004866a2051",
          "readOnly": false,
          "type": [
            "null",
            "string"
          ]
        },
        "created_at": {
          "description": "when slug was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of slug",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/slug/definitions/id"
            }
          ]
        },
        "process_types": {
          "additionalProperties": false,
          "description": "hash mapping process type names to their respective command",
          "example": {
            "web": "./bin/web -p $PORT"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string"
              ]
            }
          },
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "description": "when slug was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing slug.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs/{(%23%2Fdefinitions%2Fslug%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "Create a new slug. For more information please refer to [Deploying Slugs using the Platform API](https://devcenter.heroku.com/articles/platform-api-deploying-slugs?preview=1).",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "commit": {
                "$ref": "#/definitions/slug/definitions/commit"
              },
              "process_types": {
                "$ref": "#/definitions/slug/definitions/process_types"
              }
            },
            "required": [
              "process_types"
            ]
          },
          "title": "Create"
        }
      ],
      "properties": {
        "blob": {
          "$ref": "#/definitions/slug/definitions/blob"
        },
        "commit": {
          "$ref": "#/definitions/slug/definitions/commit"
        },
        "created_at": {
          "$ref": "#/definitions/slug/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/slug/definitions/id"
        },
        "process_types": {
          "$ref": "#/definitions/slug/definitions/process_types"
        },
        "updated_at": {
          "$ref": "#/definitions/slug/definitions/updated_at"
        }
      }
    },
    "ssl-endpoint": {
      "description": "[SSL Endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) is a public address serving custom SSL cert for HTTPS traffic to a Heroku app. Note that an app must have the `ssl:endpoint` addon installed before it can provision an SSL Endpoint using these APIs.",
      "id": "schema/ssl-endpoint",
      "title": "Heroku Platform API - SSL Endpoint",
      "type": [
        "object"
      ],
      "definitions": {
        "certificate_chain": {
          "description": "raw contents of the public certificate chain (eg: .crt or .pem file)",
          "example": "-----BEGIN CERTIFICATE----- ...",
          "type": [
            "string"
          ]
        },
        "cname": {
          "description": "canonical name record, the address to point a domain at",
          "example": "example.herokussl.com",
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when endpoint was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this SSL endpoint",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/ssl-endpoint/definitions/id"
            },
            {
              "$ref": "#/definitions/ssl-endpoint/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name for SSL endpoint",
          "example": "example",
          "pattern": "^[a-z][a-z0-9-]{3,30}$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "private_key": {
          "description": "contents of the private key (eg .key file)",
          "example": "-----BEGIN RSA PRIVATE KEY----- ...",
          "type": [
            "string"
          ]
        },
        "rollback": {
          "default": false,
          "description": "indicates that a rollback should be performed",
          "example": false,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when endpoint was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "certificate_chain": {
                "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
              },
              "private_key": {
                "$ref": "#/definitions/ssl-endpoint/definitions/private_key"
              }
            },
            "required": [
              "certificate_chain",
              "private_key"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing SSL endpoints.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "certificate_chain": {
                "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
              },
              "private_key": {
                "$ref": "#/definitions/ssl-endpoint/definitions/private_key"
              },
              "rollback": {
                "$ref": "#/definitions/ssl-endpoint/definitions/rollback"
              }
            }
          },
          "title": "Update"
        }
      ],
      "properties": {
        "certificate_chain": {
          "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
        },
        "cname": {
          "$ref": "#/definitions/ssl-endpoint/definitions/cname"
        },
        "created_at": {
          "$ref": "#/definitions/ssl-endpoint/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/ssl-endpoint/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/ssl-endpoint/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/ssl-endpoint/definitions/updated_at"
        }
      }
    },
    "stack": {
      "description": "Stacks are the different application execution environments available in the Heroku platform.",
      "id": "schema/stack",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - Stack",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when stack was introduced",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of stack",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/stack/definitions/name"
            },
            {
              "$ref": "#/definitions/stack/definitions/id"
            }
          ]
        },
        "name": {
          "description": "unique name of stack",
          "example": "cedar",
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "availability of this stack: beta, deprecated or public",
          "example": "public",
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when stack was last modified",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Stack info.",
          "href": "/stacks/{(%23%2Fdefinitions%2Fstack%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List available stacks.",
          "href": "/stacks",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/stack/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/stack/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/stack/definitions/name"
        },
        "state": {
          "$ref": "#/definitions/stack/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/stack/definitions/updated_at"
        }
      }
    }
  },
  "properties": {
    "account-feature": {
      "$ref": "/definitions/account-feature"
    },
    "account": {
      "$ref": "/definitions/account"
    },
    "addon-service": {
      "$ref": "/definitions/addon-service"
    },
    "addon": {
      "$ref": "/definitions/addon"
    },
    "app-feature": {
      "$ref": "/definitions/app-feature"
    },
    "app-transfer": {
      "$ref": "/definitions/app-transfer"
    },
    "app": {
      "$ref": "/definitions/app"
    },
    "collaborator": {
      "$ref": "/definitions/collaborator"
    },
    "config-var": {
      "$ref": "/definitions/config-var"
    },
    "domain": {
      "$ref": "/definitions/domain"
    },
    "dyno": {
      "$ref": "/definitions/dyno"
    },
    "formation": {
      "$ref": "/definitions/formation"
    },
    "key": {
      "$ref": "/definitions/key"
    },
    "log-drain": {
      "$ref": "/definitions/log-drain"
    },
    "log-session": {
      "$ref": "/definitions/log-session"
    },
    "oauth-authorization": {
      "$ref": "/definitions/oauth-authorization"
    },
    "oauth-client": {
      "$ref": "/definitions/oauth-client"
    },
    "oauth-grant": {
      "$ref": "/definitions/oauth-grant"
    },
    "oauth-token": {
      "$ref": "/definitions/oauth-token"
    },
    "plan": {
      "$ref": "/definitions/plan"
    },
    "rate-limit": {
      "$ref": "/definitions/rate-limit"
    },
    "region": {
      "$ref": "/definitions/region"
    },
    "release": {
      "$ref": "/definitions/release"
    },
    "slug": {
      "$ref": "/definitions/slug"
    },
    "ssl-endpoint": {
      "$ref": "/definitions/ssl-endpoint"
    },
    "stack": {
      "$ref": "/definitions/stack"
    }
  },
  "$schema": "http://json-schema.org/draft-04/hyper-schema",
  "title": "Heroku Platform API",
  "type": [
    "object"
  ]
}
