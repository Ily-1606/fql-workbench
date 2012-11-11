/*
 * FQL-Workbench
 * Copyright 2012 Joseph Werle (joseph.werle@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 @module field
**/
var Type = require('./type').Type

var field = {};

/**
  Constructs a new instance of a Field

  @name Field
  @constructor
  @param {String} name The name of the field
**/
field.Field = function(name, type, indexable, description){
  if (! name) {
    throw "An instance of Field must have a name";
  }

  if (! type) {
    throw "An instance of Field must have a type";
  }

  /**
    The field name

    @property name
    @public
    @type {String}
  **/
  this.name = name;

  /**
    The field type

    @property type
    @public
    @type {Type}
  **/
  this.type = new Type(type);

  /**
    Field is indexable

    @property indexable
    @public
    @type {Boolean}
    @default false
  **/
  this.indexable = indexable === true? true : false;

  /**
    The field description

    @property type
    @public
    @type {String}
  **/
  this.description = description;
};


module.exports = field;